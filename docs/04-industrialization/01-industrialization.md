# Dossier 4 — Industrialization of World Fabric Canonical Records

## 1. Objective

Industrialization increases coverage without degrading the evidential and analytical standard established by the pilot records. It begins only after the canonical-record and validation methods survive the three stress-test pilots.

Industrialization means **repeatable quality at greater volume**, not maximum automation.

## 2. Target architecture

The durable architecture separates five responsibilities:

1. **Research workspace** — source registry, claims, working data and review notes;
2. **Structured data layer** — canonical entities, relations, geometries, metrics and versions;
3. **Canonical Record assembly** — analytical/editorial orchestration;
4. **Validation layer** — schemas, controlled vocabularies, evidence gates and review decisions;
5. **Publication layer** — Docusaurus, maps, tables and generated public exports.

## 3. Source of truth split

### PostgreSQL/PostGIS — structured truth

Use for normalised entities, IDs, relations, geometry, time-series references, lifecycle states and referential integrity.

### World Fabric Record — editorial/analytical truth

Use for overview, current system state, analytical synthesis, statement registry, transformation assessment, limitations, watch list and links to evidence packages.

The two layers must reference each other by stable IDs. Neither silently redefines the other.

### Graph projection

Neo4j or another graph engine may be generated from canonical structured data for exploration and network analytics. It is a projection, not the sovereign V1 store.

## 4. Repository architecture

Recommended durable layout:

```text
world-fabric/
  docs/
  records/
    corridors/
    projects/
    assets/
    transformations/
  evidence/
  sources/
  schemas/
  taxonomies/
  data/
    public/
    internal/
  website/
  scripts/
  tests/
  .github/workflows/
```

The starter repository in this package contains the methodological subset and templates needed before full data implementation.

## 5. Canonical record storage

A record may use a directory bundle:

```text
records/corridors/<slug>/
  record.yaml
  narrative.mdx
  evidence.yaml
  geometry.geojson
  metrics.csv
  history.yaml
```

The bundle is one logical record. CI checks that IDs and versions match across files.

## 6. Static public API

GitHub Pages cannot provide a server-side API. World Fabric therefore publishes a static, versioned data surface:

```text
/static/data/latest/index.json
/static/data/latest/corridors/<id>.json
/static/data/snapshots/<snapshot>/...
```

This provides predictable machine access while keeping the public observatory static.

## 7. Docusaurus publication shell

Docusaurus hosts three public entry paths:

### Explore the World
Interactive maps, corridor cards, project lists, transformations and public data exploration.

### Understand the Model
Definitions, methodological concepts and explanatory examples.

### Inspect the Research
Validation protocol, source methodology, datasets, schemas, versions, limitations and decisions.

Docusaurus is a shell, not the research model. Analytical data remain generator inputs rather than being authored independently inside React components.

## 8. Front-end components

Recommended eventual components:

- `CorridorCard`;
- `SystemStatePanel`;
- `InspectableStatement`;
- `EvidenceDrawer`;
- `WatchList`;
- `ProjectImpactChain`;
- `BottleneckMatrix`;
- `CoverageMatrix`;
- `Timeline`;
- MapLibre map layers;
- network graph viewer when useful.

Every component receives canonical generated data and must not contain hard-coded analytical conclusions.

## 9. CI/CD gates

Every pull request should run:

1. JSON/YAML/schema validation;
2. controlled-vocabulary validation;
3. duplicate stable-ID detection;
4. referential-integrity checks;
5. public/internal namespace leak test;
6. Markdown/MDX link checks;
7. Docusaurus build;
8. generated-output diff;
9. optional data freshness warnings.

Main-branch publication requires successful validation and an approved record validation decision.

## 10. GitHub Pages deployment

The website build should use GitHub Actions and GitHub Pages artifact deployment. The exact owner/repository/base URL is environment configuration and must be set before first deployment.

The public workflow must build only from publishable directories and must not upload `data/internal` or working evidence content.

## 11. Versioning strategy

Use three distinct versions:

- **schema version** — data-contract compatibility;
- **method version** — analytical methodology;
- **record version** — changes to a specific canonical record.

Dataset snapshots receive immutable identifiers such as `2026-08-13.1` or release tags. “Latest” is an alias generated from a validated snapshot, never a mutable source of historical truth.

## 12. Automation agents

After manual pilots validate the workflow, agents may assist four bounded jobs:

### Discovery agent
Find candidate sources/projects and propose source-registry entries.

### Extraction agent
Extract structured candidate facts with exact source locators and epistemic labels.

### Consistency agent
Detect unit conflicts, date conflicts, duplicate IDs, stale values and likely contradictions.

### Monitoring agent
Watch active projects and source endpoints for material changes and open revalidation tasks.

Agents must produce **proposals**, not silently validated facts.

## 13. LLM policy

LLMs may:

- suggest structured extraction;
- classify candidate source type;
- propose summaries linked to evidence;
- identify possible contradiction;
- draft narrative from already validated structured facts.

LLMs may not autonomously:

- promote expected data to observed;
- decide that a project removes a bottleneck;
- validate a system transformation;
- invent missing values;
- resolve incompatible source definitions by averaging;
- publish a record.

## 14. Test strategy

### Schema tests
Known-valid and known-invalid fixtures.

### Referential tests
Every referenced actor/asset/project/statement/source exists.

### Epistemic tests
No projected value in observed-only fields; scenario data cannot enter observed snapshots.

### Rights tests
Internal excerpts/attachments never appear in public build.

### Regression tests
Changes in methods regenerate expected outputs and flag materially changed conclusions.

### Editorial tests
First-screen required fields are present; important statements have evidence packages.

## 15. Performance and scale

Do not optimise for millions of objects before empirical need. The main scale challenge is research quality, not storage capacity. PostgreSQL/PostGIS, static generated JSON and a static Docusaurus site are sufficient for the foreseeable research V1/V2 footprint.

## 16. Security and integrity

- Protect main branch;
- require reviews for schema/taxonomy changes;
- sign releases where practical;
- pin or control CI dependencies;
- keep internal evidence outside public artifacts;
- preserve hashes for critical source files where legally stored;
- maintain immutable release snapshots.

## 17. Industrialization gate

Global production does not begin until all three stress-test pilots demonstrate:

- a stable record schema;
- no recurring P1 model defect;
- a repeatable evidence-review workflow;
- acceptable maintenance cost;
- successful generation of public pages/data;
- at least one material revision handled without breaking traceability.

## 18. Anti-industrialization warning

If production speed is improved by weakening source locators, skipping contradictions, removing counter-effects or replacing missing data with synthetic precision, the pipeline has failed regardless of object count.
