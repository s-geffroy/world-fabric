#!/usr/bin/env python3
from pathlib import Path
import json, sys
try:
    import yaml
    from jsonschema import Draft202012Validator, FormatChecker
except ImportError:
    print('Install PyYAML and jsonschema to run validation.', file=sys.stderr)
    raise

ROOT = Path(__file__).resolve().parents[1]
SCHEMA = json.loads((ROOT/'schemas/corridor-record.schema.json').read_text())
validator = Draft202012Validator(SCHEMA, format_checker=FormatChecker())

def main():
    candidates = list((ROOT/'records/corridors').glob('*/record.yaml')) if (ROOT/'records/corridors').exists() else []
    if not candidates:
        print('No corridor records found; schema itself is available.')
        return 0
    failures = 0
    for path in candidates:
        data = yaml.safe_load(path.read_text())
        errors = sorted(validator.iter_errors(data), key=lambda e: list(e.path))
        if errors:
            failures += 1
            print(f'FAIL {path}')
            for e in errors:
                print('  ', '/'.join(map(str,e.path)), e.message)
        else:
            print(f'PASS {path}')
    return 1 if failures else 0

if __name__ == '__main__':
    raise SystemExit(main())
