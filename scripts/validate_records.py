#!/usr/bin/env python3
"""Validate the canonical registers against their JSON schemas.

Templates are validated too: a schema change that breaks the authoring template
should fail here, not at the next authoring session.
"""
from pathlib import Path
import json, sys
try:
    import yaml
    from jsonschema import Draft202012Validator, FormatChecker
except ImportError:
    print('Install PyYAML and jsonschema to run validation.', file=sys.stderr)
    raise

ROOT = Path(__file__).resolve().parents[1]

REGISTERS = [
    ('corridor record', 'schemas/corridor-record.schema.json',
     ['records/corridors/*/record.yaml', 'templates/corridor-record.template.yaml']),
    ('intervention', 'schemas/intervention.schema.json',
     ['data/public/interventions/*.yaml', 'templates/intervention.template.yaml']),
]


def check(label, schema_path, patterns):
    schema = json.loads((ROOT / schema_path).read_text())
    validator = Draft202012Validator(schema, format_checker=FormatChecker())
    paths = sorted({p for pattern in patterns for p in ROOT.glob(pattern)})
    if not paths:
        print(f'No {label} files found; schema itself is available.')
        return 0
    failures = 0
    for path in paths:
        data = yaml.safe_load(path.read_text())
        errors = sorted(validator.iter_errors(data), key=lambda e: list(e.path))
        rel = path.relative_to(ROOT)
        if errors:
            failures += 1
            print(f'FAIL {rel}')
            for e in errors:
                print('  ', '/'.join(map(str, e.path)), e.message)
        else:
            print(f'PASS {rel}')
    return failures


def main():
    return 1 if sum(check(*r) for r in REGISTERS) else 0


if __name__ == '__main__':
    raise SystemExit(main())
