# Master Source Registry Specification

## Purpose

The registry is the inventory of sources used or evaluated during production. It prevents source collection from becoming an untraceable browser-history exercise.

## Minimum fields

```yaml
source_id:
source_type:
publisher:
title:
publication_date:
url_or_locator:
retrieved_at:
language:
rights_status:
geographic_scope:
object_scope:
notes:
```

## Source types

See `taxonomies/source_types.yaml`.

## Rules

- One source receives one stable ID even when it supports many statements.
- Mirror URLs do not become independent corroboration.
- A press article repeating a sponsor press release is not independent evidence.
- Archived versions may be stored as separate evidence artifacts when the underlying content materially changed.
- Source accessibility is not the same as publication rights.
- For dynamic dashboards, record retrieval timestamp and query/filter parameters.
- For datasets, record version/release identifier where available.
