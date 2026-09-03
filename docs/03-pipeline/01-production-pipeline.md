# Dossier 3 — Canonical Record Production Pipeline

## 1. Objective

The production pipeline converts a research question and candidate corridor into a validated, publishable and monitorable World Fabric Canonical Record while preserving provenance and uncertainty.

The pipeline is deliberately stage-gated. Automation accelerates collection and consistency checks; it does not bypass analytical validation.

## 2. End-to-end workflow

`Candidate → Scoping → Source registry → Collection → Normalisation → System mapping → Metrics → Project impacts → Draft → Evidence review → Analytical review → Validation → Publication → Monitoring → Revalidation`

## 3. Stage 0 — Candidate admission

Inputs:

- candidate corridor/system;
- proposed L1/L2/L3 classification;
- logistics relevance rationale;
- preliminary source availability;
- reason for research priority.

Exit condition: the object satisfies the World Fabric inclusion rule and is not already represented by another canonical object.

## 4. Stage 1 — Scope freeze

Produce a one-page scope note containing:

- canonical working name;
- primary function;
- geographic start/end logic;
- modes;
- primary flow families;
- included branches;
- excluded branches;
- analytical period;
- core research hypothesis;
- public editorial question.

The scope may later change, but every change is recorded. Research must not expand silently whenever new infrastructure is discovered.

## 5. Stage 2 — Master Source Registry

Before narrative drafting, build a source registry organised by information need:

- corridor definition;
- asset identity;
- project status;
- traffic/flow data;
- capacity data;
- border/customs performance;
- finance and ownership;
- operational disruptions;
- strategic claims;
- independent assessments.

Each source gets stable ID, publisher, title, date, locator, source type, rights status and retrieval date.

Search should deliberately seek disconfirming material, not only sponsor material.

## 6. Stage 3 — Evidence collection

Collection creates structured claims and observations rather than copied prose.

For each material datum:

- capture original unit and definition;
- preserve period and geography;
- identify whether observed or expected;
- capture locator;
- note methodological caveats;
- record conflicting values.

Do not normalise away uncertainty at collection time.

## 7. Stage 4 — Normalisation

Normalisation resolves:

- canonical entity names;
- IDs;
- units;
- dates;
- currencies where relevant;
- geographic references;
- project lifecycle vocabulary;
- duplicate source claims;
- alternative names.

Original values are retained alongside normalised values where transformation is non-trivial.

## 8. Stage 5 — Corridor system mapping

Build the system in this order:

1. geographic segments;
2. functional links;
3. critical assets;
4. flow paths;
5. operational dependencies;
6. major projects.

This order prevents a project list from dictating the corridor model.

Deliverables:

- canonical route/branch geometry;
- segment table;
- functional-link table;
- critical asset list;
- first dependency map.

## 9. Stage 6 — Metrics and performance table

Populate the multidimensional evidence table. Prefer time series where available. Do not infer a trend from two isolated observations when a usable series exists.

For each metric record:

- definition;
- unit;
- period;
- geographic scope;
- source;
- observation type;
- confidence;
- missingness/compatibility notes.

## 10. Stage 7 — Bottleneck diagnosis

For each suspected bottleneck:

1. identify constrained functional link;
2. identify affected flow/metric;
3. identify concrete assets/processes;
4. establish persistence;
5. search for evidence that the constraint is not material;
6. record substitution/workaround;
7. classify confidence.

The output is a bottleneck register, not a prose section alone.

## 11. Stage 8 — Project inventory and impact chains

Create the relevant project set without numerical quota pressure. For the Middle Corridor V1 pilot, 25–40 projects is an expected working range, not a target to fill.

For each major project:

- lifecycle status;
- affected asset;
- asset change;
- functional-link change;
- corridor metric potentially changed;
- epistemic status of each effect;
- adjacent constraints;
- counter-effects;
- net assessment;
- evidence.

Projects with no material corridor impact remain out of the canonical analytical core even if politically associated.

## 12. Stage 9 — Transformation candidate construction

The researcher evaluates magnitude, persistence, system reach, dependency change and operational evidence.

A candidate transformation is drafted only after the empirical tables exist. It must not be written first and then “supported” retrospectively.

Required adversarial section:

- strongest evidence against;
- plausible alternative explanations;
- sponsor claims not demonstrated;
- missing observations;
- invalidation conditions.

## 13. Stage 10 — Narrative drafting

Draft the analytical record from structured evidence. Narrative prose must not become the only place where critical facts live.

Drafting order:

1. analytical body;
2. limitations;
3. transformation assessment;
4. overview;
5. `Why it matters` last.

Writing the overview last reduces the risk that early framing determines the research.

## 14. Stage 11 — Evidence review

Evidence reviewer checks statement-to-evidence traceability, scope fit, conflicts, promotional sources and missing counter-evidence.

Output:

- defect log;
- evidence-package revisions;
- confidence changes;
- blocking issues.

## 15. Stage 12 — Analytical review

Analytical reviewer attacks:

- corridor boundaries;
- bottleneck diagnosis;
- local-to-system inference;
- diversification/substitution language;
- project counter-effects;
- transformation hypothesis;
- alternative explanations.

The reviewer should try to falsify the strongest public conclusion.

## 16. Stage 13 — Validation and release candidate

Run schema validation, referential integrity, controlled vocabularies, broken links, public/internal separation and first-screen editorial tests.

Generate a release candidate snapshot. No source data change is allowed between validation and publication without invalidating the candidate.

## 17. Stage 14 — Publication

Publication generates:

- Docusaurus pages;
- public JSON/YAML;
- GeoJSON;
- CSV tables where useful;
- source registry subset compatible with rights;
- version metadata;
- change log.

A release is tagged in Git.

## 18. Stage 15 — Monitoring

After publication, the record enters `monitoring` rather than “done”. Watch items and revalidation triggers define monitoring.

Monitoring inputs:

- project milestones;
- new traffic/capacity data;
- policy/regulatory changes;
- disruptions;
- new independent research;
- contradiction alerts;
- source corrections.

## 19. Stage 16 — Revalidation

A material update creates a new record version. The change log identifies affected statements and whether the transformation assessment changes.

## 20. Human/automation boundary

### Good automation targets

- metadata extraction;
- URL/source deduplication;
- unit/date normalisation suggestions;
- schema validation;
- broken-link checking;
- stale-review alerts;
- diff generation;
- candidate duplicate detection;
- public export generation;
- map/data build;
- possible contradiction surfacing.

### Human-required V1 decisions

- scope freeze;
- inclusion/exclusion of strategically ambiguous assets/projects;
- whether sources are methodologically compatible;
- bottleneck validation;
- project net-effect assessment;
- transformation validation;
- confidence judgment for material conclusions;
- final publication decision.

## 21. Provenance requirement

Automation-generated content must record tool/method version and never overwrite human-validated analytical fields without review.

## 22. Definition of pipeline success

The pipeline succeeds when a second researcher can reproduce the path from source registry to public conclusion, and when a material source update can be propagated to the affected statement without manually rediscovering the whole record.
