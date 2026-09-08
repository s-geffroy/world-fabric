#!/usr/bin/env python3
"""Derive the website's data island from the canonical sources.

The coverage matrix is authored as CSV because it is reviewed and edited by
hand; the site needs it as JSON, indexed for lookup. Deriving it at build time
keeps a single source of truth: the page can never claim a coverage the matrix
does not carry.
"""
from pathlib import Path
import csv
import json

import yaml

ROOT = Path(__file__).resolve().parents[1]
MATRIX = ROOT / 'templates' / 'coverage_matrix.csv'
TAXONOMIES = ROOT / 'taxonomies'
OUT = ROOT / 'website' / 'src' / 'data' / 'coverage.json'
INTERVENTIONS = ROOT / 'data' / 'public' / 'interventions'
OUT_INTERVENTIONS = ROOT / 'website' / 'src' / 'data' / 'interventions.json'


def load_taxonomy(name):
    """Read a `values:` list without pulling PyYAML into the site build."""
    values = []
    inside = False
    for line in (TAXONOMIES / name).read_text(encoding='utf-8').splitlines():
        if line.startswith('values:'):
            inside = True
            continue
        if inside:
            if line.startswith('  - '):
                values.append(line[4:].strip())
            elif line.strip() and not line.startswith(' '):
                break
    return values


def load_levels():
    """strategic_levels.yaml carries id/definition pairs, not bare values."""
    levels = []
    for line in (TAXONOMIES / 'strategic_levels.yaml').read_text(encoding='utf-8').splitlines():
        stripped = line.strip()
        if stripped.startswith('- id:'):
            levels.append({'id': stripped[5:].strip(), 'definition': ''})
        elif stripped.startswith('definition:') and levels:
            levels[-1]['definition'] = stripped[len('definition:'):].strip()
    return levels


def build_interventions():
    """Expose the register as it is, including when it is empty.

    A count of candidates is not a measure of coverage, so the page is given the
    tier of every entry and never a bare total.
    """
    entries = []
    for path in sorted(INTERVENTIONS.glob('*.yaml')):
        data = yaml.safe_load(path.read_text(encoding='utf-8')) or {}
        entries.append({
            'id': data.get('intervention_id', path.stem),
            'summary': data.get('summary', ''),
            'type': data.get('intervention_type', ''),
            'status': data.get('status', 'candidate'),
            'corridor': data.get('corridor_ref', ''),
            'bottleneck': data.get('targets_bottleneck', ''),
            'sufficiency': data.get('evidence_sufficiency', 'insufficient'),
            'confidence': data.get('confidence', 'low'),
            'displacement': (data.get('displacement') or {}).get('next_binding_constraint', ''),
            'expectedEffect': (data.get('expected_effect') or {}).get('magnitude_band', 'uncertain'),
            'priorityRationale': data.get('priority_rationale', ''),
            'falsification': data.get('falsification', ''),
            'evidenceCount': len(data.get('evidence') or []),
        })

    counts = {}
    for e in entries:
        counts[e['status']] = counts.get(e['status'], 0) + 1

    payload = {
        'source': 'data/public/interventions/',
        'types': load_taxonomy('intervention_types.yaml'),
        'statuses': load_taxonomy('intervention_status.yaml'),
        'sufficiency': load_taxonomy('evidence_sufficiency.yaml'),
        'bands': load_taxonomy('magnitude_bands.yaml'),
        'counts': counts,
        'total': len(entries),
        'entries': entries,
    }
    OUT_INTERVENTIONS.parent.mkdir(parents=True, exist_ok=True)
    OUT_INTERVENTIONS.write_text(json.dumps(payload, indent=2, sort_keys=True) + '\n',
                                 encoding='utf-8')
    print(f"Wrote {OUT_INTERVENTIONS.relative_to(ROOT)}: {len(entries)} intervention(s), "
          f"{len(payload['types'])} types")


def main():
    rows = list(csv.DictReader(MATRIX.open(encoding='utf-8')))

    regions, seen = [], set()
    for row in rows:
        if row['region_id'] not in seen:
            seen.add(row['region_id'])
            regions.append({'id': row['region_id'], 'name': row['region_name']})

    matrix, status_counts = {}, {}
    totals = {'cells': 0, 'identified': 0, 'validated': 0, 'published': 0}
    for row in rows:
        cell = {
            'status': row['coverage_status'],
            'identified': int(row['objects_identified'] or 0),
            'validated': int(row['objects_validated'] or 0),
            'published': int(row['objects_published'] or 0),
            'gaps': row['priority_gaps'],
            'reviewed': row['last_reviewed'],
        }
        matrix.setdefault(row['region_id'], {}).setdefault(
            row['infrastructure_family'], {})[row['strategic_level']] = cell
        status_counts[cell['status']] = status_counts.get(cell['status'], 0) + 1
        totals['cells'] += 1
        for key in ('identified', 'validated', 'published'):
            totals[key] += cell[key]

    payload = {
        'source': 'templates/coverage_matrix.csv',
        'regions': regions,
        'families': load_taxonomy('infrastructure_families.yaml'),
        'statuses': load_taxonomy('coverage_status.yaml'),
        'levels': load_levels(),
        'totals': totals,
        'statusCounts': status_counts,
        'matrix': matrix,
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, indent=2, sort_keys=True) + '\n', encoding='utf-8')
    print(f"Wrote {OUT.relative_to(ROOT)}: {totals['cells']} cells, "
          f"{len(regions)} regions x {len(payload['families'])} families "
          f"x {len(payload['levels'])} levels")

    build_interventions()


if __name__ == '__main__':
    raise SystemExit(main())
