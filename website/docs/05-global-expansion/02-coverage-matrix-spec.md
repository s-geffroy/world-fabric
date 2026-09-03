# Coverage Matrix Specification

The canonical machine-readable matrix template is in `templates/coverage_matrix.csv`.

## Required dimensions

- `region_id`
- `infrastructure_family`
- `strategic_level`

## Required state

- `coverage_status`
- `objects_identified`
- `objects_validated`
- `objects_published`
- `priority_gaps`
- `last_reviewed`
- `reviewer`

## Interpretation rule

Counts are operational indicators only. Coverage status is a reviewed assessment of whether structurally important objects are represented and major known gaps are documented.
