# Dossier 2 — World Fabric Canonical Record Validation Protocol

**Purpose:** determine whether a canonical record is admissible, scientifically defensible, internally coherent and publishable.

## 1. Validation philosophy

Validation is not copy-editing. It is an adversarial test of whether the record’s important statements survive inspection.

A record may be well written and still fail validation because:

- its scope is unstable;
- data definitions are incompatible;
- project effects reproduce sponsor claims;
- the transformation conclusion is stronger than the operational evidence;
- contradictions are hidden;
- key metrics cannot be traced to sources.

The default outcome of unresolved material uncertainty is **qualified publication or blocked publication**, not invented precision.

## 2. Roles

Minimum logical roles:

- **Researcher:** collects and normalises evidence;
- **Record author:** assembles the analytical record;
- **Evidence reviewer:** checks traceability, source fit and conflicts;
- **Analytical reviewer:** challenges system interpretation and alternative explanations;
- **Validator:** makes the publication decision;
- **Taxonomy steward:** approves controlled-vocabulary changes.

One person may hold several roles in an individual research project, but the workflow must record which role was performed and when. Self-review never substitutes for an explicit adversarial pass.

## 3. Validation outcomes

Allowed decisions:

- `validated_for_publication`;
- `validated_with_qualifications`;
- `revision_required`;
- `blocked_insufficient_evidence`;
- `blocked_model_incoherence`;
- `withdrawn`;
- `superseded`.

## 4. Severity classes

Defects are classified as:

- **P0 — integrity failure:** fabricated/uncitable data, silent observed/expected mixing, rights breach, corrupted provenance;
- **P1 — blocking analytical failure:** unsupported headline conclusion, scope incoherence, invalid aggregation, missing counter-evidence to a material claim;
- **P2 — major defect:** incomplete project impact, missing dependency, stale critical source, important ambiguity;
- **P3 — minor defect:** wording, navigation, metadata or non-material completeness issue.

Any open P0 or P1 blocks publication. P2 may allow qualified publication only when the limitation is visible and non-central. P3 does not block publication.

## 5. The ten quality gates

### Gate 1 — Identity and scope
Pass conditions:

- canonical object is uniquely identified;
- alternative names are recorded;
- geographic and functional boundaries are explicit;
- inclusion/exclusion rationale is documented;
- strategic level is justified.

Blocking defects include duplicate identity, undefined corridor boundary, and scope chosen only to support a desired conclusion.

### Gate 2 — System representation
Pass conditions:

- major geographic segments are represented;
- critical functional links are present;
- material multimodal transitions are explicit;
- critical assets are linked;
- the representation is sufficient to explain end-to-end movement.

Review question: **Could a logistics specialist reconstruct how a shipment moves through the corridor from this record?**

### Gate 3 — Flow relevance
Pass conditions:

- flow families are evidenced;
- observed and projected flows are separated;
- measurement units and periods are defined;
- incompatible data are not silently aggregated;
- source scope is compatible with the claim.

### Gate 4 — Capacity analysis
Pass conditions:

- nominal capacity is distinguished from operationally usable capacity;
- capacities are attached to the correct function/asset/segment;
- end-to-end constraints are considered;
- missing capacity data are explicit;
- experimental composite estimates are decomposable.

P1 defect: claiming corridor capacity by summing unrelated or locally constrained nominal capacities.

### Gate 5 — Bottleneck and dependency diagnosis
Pass conditions:

- bottlenecks are linked to constrained functions;
- evidence shows material system effect;
- dependencies identify substitutability and consequence of loss;
- ownership and control are not conflated;
- bottleneck migration is considered when projects remove local constraints.

### Gate 6 — Project-impact analysis
Pass conditions:

- project status is evidenced;
- announced, financed, contracted, construction and operational states are distinct;
- asset change is identified;
- functional-link effect is identified;
- corridor-level effect is not inferred automatically;
- counter-effects are documented;
- observed and expected effects are separated.

Mandatory challenge: **What adjacent constraint can prevent this project from delivering its claimed system benefit?**

### Gate 7 — Transformation assessment
Pass conditions:

- transformation is labelled candidate/validated/etc.;
- at least two dimensions show significant change;
- at least two segments or functional links are affected;
- persistence or substantial irreversible investment is shown;
- at least one operational effect exists;
- alternative explanations are documented;
- invalidation conditions are stated;
- a human reviewer approves validation.

### Gate 8 — Evidence and traceability
Pass conditions:

- important statements have stable IDs;
- each material statement links to an evidence package;
- primary sources are used where appropriate;
- independent corroboration is sought for contested or promotional claims;
- contradictory evidence is preserved;
- source locators are precise enough for reinspection.

A long bibliography does not satisfy this gate if statement-to-source traceability is absent.

### Gate 9 — Data integrity
Pass conditions:

- record validates against schemas;
- IDs are unique and stable;
- controlled vocabularies validate;
- dates and units are parseable;
- referential integrity is checked;
- public build contains no internal/restricted content;
- geometries declare precision.

### Gate 10 — Editorial usability
Pass conditions:

- overview passes the thirty-second test;
- current state and confidence are distinct;
- map is readable;
- observed/expected/scenario are visibly distinguishable;
- important claims can be inspected;
- limitations are accessible without hunting.

## 6. Evidence admissibility

Evidence is assessed on six dimensions:

1. **Directness:** does it support this exact statement?
2. **Methodological quality:** is the measurement or method appropriate?
3. **Scope fit:** does its geography/object definition match?
4. **Temporal fit:** is it valid for the assessed period?
5. **Independence:** is corroboration genuinely independent?
6. **Rights/publication status:** can the relevant evidence be cited or exposed legally?

No universal numerical source score is required. The reviewer records strengths, weaknesses and relevance to the specific claim.

## 7. Source hierarchy as a search strategy, not a truth hierarchy

Preferred source classes include official primary documents, operators, contractual/financial documents, regulatory records, customs/traffic data, multilateral institutions, peer-reviewed research and specialised industry sources.

Official sources are preferred for facts under their authority but are not automatically trusted for claimed strategic effects. Project sponsors have high directness for contract dates and technical specifications, but potential incentive problems for future benefits.

## 8. Contradiction protocol

When reliable sources disagree:

1. preserve both claims;
2. compare definitions, date, scope and measurement method;
3. determine whether the conflict is real or semantic;
4. avoid averaging incompatible values;
5. publish a range only if the range has methodological meaning;
6. lower confidence when unresolved;
7. record the unresolved conflict in the evidence package.

A disagreement must never be deleted merely to obtain a clean number.

## 9. Promotional-claim protocol

A sponsor, government or operator statement such as “capacity will triple” is stored as an `expected` claim unless operationally observed.

The reviewer must identify:

- baseline definition;
- target definition;
- dependencies needed to achieve it;
- commissioning status;
- whether adjacent capacity is sufficient;
- whether the claim refers to local or corridor-level capacity.

## 10. Temporal validation

Critical records must state `as_of` and last reviewed date. Revalidation is triggered by:

- operational opening or closure;
- material project delay/cancellation;
- change of operator/control;
- major traffic or capacity revision;
- new reliable contradictory evidence;
- significant conflict/sanction/regulatory change;
- methodological version change affecting conclusions;
- expiration of freshness threshold for a critical metric.

## 11. Freshness policy

Freshness is risk-based, not uniform. Suggested defaults:

- active major project status: review every 30–90 days;
- current traffic/capacity metrics: review quarterly where data exist;
- stable physical asset identity: annual or event-triggered;
- active chokepoint/security condition: event-triggered and at least monthly during sustained stress;
- historical facts: revalidate only on new material evidence.

## 12. Adversarial review template

Every major conclusion must answer:

- What is the strongest evidence against this conclusion?
- What alternative explanation could generate the same observed pattern?
- Which source is most likely to be biased and why?
- Which missing datum could reverse the conclusion?
- Are we mistaking traffic growth from a low base for structural significance?
- Are we mistaking investment commitments for usable capacity?
- Has a bottleneck been removed or merely displaced?
- Are political narratives being repeated as operational facts?

## 13. Publication decision record

```yaml
validation_decision:
  record_id:
  record_version:
  decision:
  decided_at:
  validator:
  open_defects: []
  qualifications: []
  gates:
    gate_1_identity: pass
    gate_2_system_representation: pass
    gate_3_flow_relevance: pass
    gate_4_capacity: pass
    gate_5_bottlenecks: pass
    gate_6_project_impact: pass
    gate_7_transformation: pass
    gate_8_evidence: pass
    gate_9_data_integrity: pass
    gate_10_editorial: pass
  next_review_due:
```

## 14. Correction and withdrawal

Corrections never overwrite history silently. A published correction must state what changed, why, which statements/metrics are affected and whether the conclusion changed.

Withdrawal is required when a P0 integrity problem affects the public record or when a central P1 defect invalidates the analytical conclusion and cannot be corrected immediately.

## 15. Definition of done

A record is done for publication when all mandatory gates pass, P0/P1 defects are closed, material limitations are explicit, public exports validate, and the record has a scheduled or event-triggered revalidation path.
