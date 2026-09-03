# Dossier 1 — Method for Designing a Perfect World Fabric Canonical Record

**Status:** V1 design baseline  
**Record type:** `corridor`  
**Pilot:** Middle Corridor  
**Canonical language:** English

## 1. Purpose

A World Fabric Canonical Record (WFCR) is a living, auditable and machine-readable research object. It integrates editorial explanation, structured data, analytical assessment, uncertainty, evidence, version history and public exports.

It is not a conventional article, policy brief, database dump or static encyclopedia entry.

### Core rule

> **One object, one canonical record, multiple reading depths.**

Technically, one logical record may be composed from coordinated files such as `record.yaml`, narrative MDX, evidence files, GeoJSON and generated exports. They share one persistent identifier, one lifecycle, one publication status and one validation state.

## 2. The five reading layers

A canonical corridor record has five layers:

1. **Overview** — understand in 3–5 minutes;
2. **Analytical Record** — understand the system end to end;
3. **Evidence** — challenge and audit important statements;
4. **Data** — inspect and reuse structured content;
5. **History** — understand revisions, superseded expectations and changes in conclusions.

The layers are not separate publications. They are different levels of inspection of the same research object.

## 3. The thirty-second first screen

The first screen must answer seven questions without scrolling excessively:

1. What is the system?
2. Which geographies does it connect?
3. Why does it matter?
4. What is changing?
5. What is the principal limitation?
6. What should be monitored?
7. How confident is World Fabric?

### Required elements

- canonical name;
- functional subtitle;
- `Why it matters` paragraph of roughly 60–90 words;
- current system state;
- candidate or validated transformation statement;
- watch list of at most five items;
- compact analytical map;
- last-reviewed date;
- confidence indication.

The page must explain before it maps. A full-screen map or dense dashboard is not an acceptable opening by itself.

## 4. Identity and scope

Required structured fields:

```yaml
identity:
  record_id:
  record_type: corridor
  canonical_name:
  short_name:
  alternative_names: []
  acronyms: []
  corridor_type:
  system_level:
  canonical_language: en
  lifecycle_status:
```

Every record must contain an explicit scope declaration: what is inside the canonical core and what is excluded. This prevents uncontrolled corridor expansion.

## 5. Current system state

State is a synthesis, not a score. Initial dimensions:

- `operational_significance`;
- `capacity_direction`;
- `bottleneck_pattern`;
- `dependency_direction`;
- `resilience_direction`;
- `evidence_confidence`.

Each state must be dated, human-reviewed, evidence-backed and inspectable. Performance and confidence must never be visually merged.

Example:

```yaml
current_system_state:
  as_of: 2026-06-30
  operational_significance:
    state: growing
    confidence: medium_high
  capacity_direction:
    state: expanding_unevenly
    confidence: high
  bottleneck_pattern:
    state: migrating
    confidence: medium_high
```

## 6. Main analytical reading order

The canonical narrative path is:

1. Why this corridor matters
2. Identity and scope
3. Current system state
4. How the corridor works
5. Geographic segments
6. Functional links
7. Flows
8. Capacity and operational performance
9. Bottlenecks and dependencies
10. Projects changing the system
11. Net effects and counter-effects
12. Actors and control
13. Historical evolution
14. System transformation assessment
15. Watch list
16. Limitations
17. Evidence and data access
18. Version history

A lateral navigation must permit direct entry by map, projects, assets, capacities, dependencies, evidence or history.

## 7. Hybrid system representation

World Fabric uses three analytical levels because they answer different questions:

- **Geographic segment — Where?**
- **Functional link — Which function constrains or enables end-to-end movement?**
- **Asset — Which concrete object produces the effect?**

### Canonical rule

> A bottleneck is assessed at the functional-link level and evidenced through assets, observations and sources.

This prevents vague statements such as “the Caspian is the bottleneck” when the actual constraint may be ferry availability, port handling, rail dispatch, customs or coordination.

## 8. Geographic segments

A segment must be analytically meaningful, geographically bounded and stable enough for comparison. For the Middle Corridor, provisional candidates include China–Kazakhstan interfaces, Kazakhstan rail, eastern Caspian interface, Caspian crossing, western Caspian interface, Azerbaijan, Georgia, Türkiye and European connections.

Minimum contract:

```yaml
geographic_segment:
  segment_id:
  canonical_name:
  geography_refs: []
  start_node:
  end_node:
  modes: []
  primary_assets: []
  principal_constraints: []
  geometry_ref:
  evidence_refs: []
```

## 9. Functional links

Controlled functional categories initially include:

`origin_access`, `rail_haul`, `road_haul`, `border_crossing`, `port_approach`, `port_handling`, `maritime_crossing`, `modal_transfer`, `customs_processing`, `service_coordination`, `last_mile_connection`.

Minimum contract:

```yaml
functional_link:
  link_id:
  function_type:
  geographic_segment_refs: []
  asset_refs: []
  flow_refs: []
  capacity_metrics: []
  operational_metrics: []
  constraints: []
  project_refs: []
  dependency_refs: []
  confidence:
```

## 10. Flows

Flow families must be evidenced, not assumed. Every numeric flow observation declares whether it is `measured`, `reported`, `estimated`, `derived`, `projected` or `scenario`.

Incompatible sources must not be aggregated without a documented harmonisation method.

## 11. Capacity doctrine

No single headline score is primary. The record should use available metrics such as:

- throughput;
- end-to-end transit time;
- transit-time variability;
- service frequency and regularity;
- segment capacity;
- port handling and crossing capacity;
- border-processing time;
- modal-transfer time;
- number of transfers;
- indicative total cost;
- asset availability;
- dependency concentration;
- substitution capacity.

Missing data must be explicit with reasons such as `not_published`, `incompatible_definitions`, `commercially_sensitive`, or `insufficient_time_series`.

### Experimental secondary estimate

`effective_corridor_capacity_v0` may combine nominal capacity, operational availability, accessibility, resilience, substitutability and evidence confidence. It is secondary, decomposable and prohibited as the sole basis for a conclusion.

## 12. Bottlenecks and dependencies

A low-capacity asset is not automatically a bottleneck. It becomes one when it materially constrains the relevant corridor function.

A dependency exists when performance materially relies on an asset, actor, interface, jurisdiction, technology or service whose loss or restriction would degrade the system.

Ownership alone does not prove control or dependency.

## 13. Project-impact method

A project is included when it materially expands capacity, improves reliability, reduces transit time, removes interface friction, changes modal connectivity, creates redundancy, modifies dependency, changes access, enables a strategic branch, or removes a strategic function.

Maximum V1 impact chain:

`Project → Asset change → Functional-link change → Corridor metric change`

Then separately:

`Constraints / counter-effects → Observed or expected net effect`

Every material project assessment asks which adjacent constraint may limit, delay, displace or neutralise the announced benefit.

When values are unavailable, use a qualitative direction and state that magnitude is unknown rather than inventing numbers.

## 14. Actors and control

Actors are described by role: owner, operator, financier, constructor, regulator, customs authority, coordinator, carrier, insurer, protector, potential disruptor and beneficiary.

The record distinguishes formal authority, ownership, operational control, commercial access, disruption capacity and protection capacity. “Controls the corridor” is prohibited without specifying the dimension.

## 15. Historical evolution

History exists to explain the current system, not to become a general history of Eurasian commerce. The Middle Corridor pilot uses 2017–2026 as its primary analytical period, with concise earlier context.

## 16. System transformation assessment

The pilot scientific hypothesis is:

> **Investment is increasing the effective capacity of the Middle Corridor faster than its structural bottlenecks are being removed.**

The public editorial question is:

> **Is the Middle Corridor shifting from a politically promoted route to an operationally significant Eurasian logistics system?**

Assessment dimensions are magnitude, persistence, system reach, dependency change and operational evidence. No mandatory overall score is used.

A transformation assessment must include evidence supporting it, evidence weakening it, alternative explanations, promotional claims not demonstrated, critical unknowns and conditions that would invalidate the assessment.

## 17. Watch list

A watch item is not news. It is a development capable of changing the current assessment. Each item defines why it matters, current status, trigger conditions, expected effect, epistemic status and review cadence.

The overview displays at most five.

## 18. Evidence and statement inspection

Important statements receive stable IDs. An inspection view should expose the analytical basis, linked metrics, observations, supporting sources, contradicting sources, limitations, confidence and version history.

Evidence quality is relational: it depends on whether a source directly and methodologically supports the specific claim, not merely on publisher prestige.

## 19. Public data outputs

A record should generate publishable JSON/YAML, GeoJSON and tabular exports, each with schema version, record version, dataset snapshot, generation timestamp, licence and rights limitations.

Public, internal and restricted namespaces are strictly separated. Nothing from `data/internal/` may be deployed by the public build.

## 20. Version history

Critical states and assessments use bitemporal fields where needed: `valid_from`, `valid_to`, `recorded_from`, `recorded_to`.

Every published change log must answer what changed, why it changed, which statements are affected, which sources changed and whether the analytical conclusion changed.

## 21. Writing rules

The canonical voice is precise, neutral, direct and explicit about uncertainty. Avoid promotional claims, unsupported superlatives, deterministic predictions and vague geopolitical clichés.

Always distinguish:

- announced vs financed;
- financed vs contracted;
- contracted vs construction;
- construction vs operational;
- nominal vs usable capacity;
- local gain vs system gain;
- traffic growth vs structural transformation;
- diversification vs substitution;
- ownership vs control;
- political support vs operational significance.

## 22. Acceptance tests

### Thirty-second test
A new reader must identify what the corridor is, why it matters, what is changing, its main limitation, the watch items and World Fabric’s confidence.

### One-hour audit test
A domain expert must be able to trace the main conclusion to evidence, inspect contradictory material, understand the method and identify limitations without manually hunting through unrelated files.

### Machine-readability test
A parser must extract identity, segments, links, assets, flows, states, bottlenecks, dependencies, projects, impacts, transformation status, evidence references, dates, confidence and version without interpreting narrative prose.

## 23. Foundational statement

> **A World Fabric Canonical Record describes a material system, assesses its current state, explains how projects and constraints are changing it, and makes every important conclusion traceable to evidence.**
