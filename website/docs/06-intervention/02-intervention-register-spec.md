# Intervention Register Specification

The machine-readable contract is `schemas/intervention.schema.json`. The
authoring template is `templates/intervention.template.yaml`. Entries live in
`data/public/interventions/`, one YAML file per intervention.

## Required fields

| field | note |
|---|---|
| `intervention_id` | `urn:worldfabric:intervention:<slug>` |
| `corridor_ref` | the canonical corridor record it acts on |
| `targets_bottleneck` | reference into that corridor's bottleneck register |
| `intervention_type` | `taxonomies/intervention_types.yaml` |
| `summary` | one sentence, no adjectives |
| `epistemic_status` | fixed to `scenario` by the schema |
| `proposed_change` | functional link, metric, direction, magnitude band |
| `expected_effect` | corridor metric, magnitude band, reasoning |
| `displacement` | next binding constraint, and why |
| `counter_effects` | at least one |
| `preconditions` | at least one |
| `evidence` | source-registry references |
| `evidence_sufficiency` | `taxonomies/evidence_sufficiency.yaml` |
| `falsification` | what would show this is the wrong intervention |
| `confidence` | reuses `system_states.yaml` → `confidence` |
| `priority_rationale` | argued in words, never a score |
| `status` | `taxonomies/intervention_status.yaml` |

`review` is optional and its fields accept `null` while undecided, consistent
with the other templates in this package.

## Magnitude, not measurement

`proposed_change.magnitude_band` and `expected_effect.magnitude_band` take a band
from `taxonomies/magnitude_bands.yaml`, never a number. A single figure attached
to an effect that has not been observed is invented precision, and it would be
quoted as though it had been measured.

`uncertain` is a legitimate band and is the correct default. It is not a failure
to state a band.

## Status transitions

```
candidate → evidence_review → analytical_review → validated → implemented
        ↘ blocked_insufficient_evidence
        ↘ withdrawn
validated → contested | superseded
```

Two conditional rules are enforced by the schema rather than by review
discipline:

- `status: candidate` requires `evidence_sufficiency: insufficient`;
- `status: validated` requires at least one `evidence` entry and an
  `evidence_sufficiency` of `sufficient` or
  `sufficient_for_qualified_publication`.

An author cannot promote an entry by editing one field.

## Validation

`scripts/validate_records.py` validates every file in
`data/public/interventions/` against the schema, alongside the corridor records.
It is also run against the template, so a schema change that breaks the template
is caught immediately rather than at the next authoring session.

## Rendering rule

Wherever interventions are displayed, the tier must be visible in the same view
as the intervention itself — not in a footnote, not on a separate page. A
candidate carries an explicit non-citable notice.

Counts of candidates are never presented as coverage or as progress. They measure
how much has been hypothesised, which is not a measure of how much is known.
