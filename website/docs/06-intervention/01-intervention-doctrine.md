# Dossier 6 — Intervention Doctrine

**Purpose:** state the conditions under which World Fabric may say what *should
be built*, and the conditions under which it must refuse to say it.

## 1. Why this dossier exists

Dossiers 1 to 5 describe the world as it is and as it is being changed by
projects other people have decided to undertake. They are descriptive by
construction.

The question that motivates the observatory, however, is not only descriptive.
It is:

> **Which works would actually improve the capacity of the systems that carry
> global flows, and on what evidence?**

That question is legitimate, and refusing it altogether would be an evasion. But
answering it badly is worse than not answering it: a ranked list of desirable
infrastructure, published without traceable evidence, is exactly the kind of
artefact this project was built to distrust. Such lists already circulate, and
their weakness is always the same — they enumerate ambitions rather than relieve
identified constraints.

This dossier makes the prescriptive layer possible without letting it contradict
the charter.

## 2. The unit is a bottleneck, never a wish

An **intervention** is a reasoned proposal to relieve a **documented bottleneck**
in a corridor that has a canonical record.

The order is not negotiable, and it is the whole design:

`Corridor record → bottleneck register → intervention`

An intervention that cannot name the bottleneck it targets is not a weak
intervention. It is not an intervention at all. This single constraint is what
separates a research output from a wish list: the work must be earned by a
constraint that was established independently, before anyone thought about the
remedy.

Interventions are not restricted to concrete. On the `border_coordination` and
`digital` families the binding constraint is frequently procedural, contractual
or informational, and a doctrine that recognised only physical works would
systematically misdescribe those systems.

## 3. A proposed effect is a scenario, permanently

The claimed effect of an intervention carries `epistemic_status: scenario`, and
the schema fixes the value as a constant. It cannot be authored otherwise.

Two consequences follow, and both are deliberate.

**Building the work does not convert the claim.** When an intervention is
implemented, its status becomes `implemented`. Its *effect* remains a scenario
until new evidence is collected on the corridor metric itself. Construction is
evidence that something was built; it is not evidence that the system improved.

**A sponsor's projection is not evidence of effect.** It may be recorded as
`expected`, attributed to its issuer with its issue date, exactly as Dossier 1
requires of any announced capacity. It never becomes the intervention's own
expected effect.

## 4. Displacement is mandatory

Every intervention must name the constraint that becomes binding once the
targeted one stops binding, and explain why.

This field is required by the schema. An intervention with no named successor
constraint is treated as incomplete, not as optimal — the absence of a successor
is almost always a gap in the analysis rather than a property of the system.

The reasoning is the same one that motivates the whole observatory: widening a
segment usually moves the bottleneck. A proposal that does not say where it moves
has not been thought through to the point where it could be acted on.

## 5. No priority score

There is no composite priority index, and none may be stored. This follows
directly from the charter's measurement doctrine and ADR-006.

Priority is argued in words, against documented criteria, and selected by a
human — the same mechanism Dossier 5 already uses for research priority. The
criteria a `priority_rationale` is expected to engage with:

- how binding the targeted bottleneck is, for which flow families;
- how many segments or functional links the relief would reach;
- whether the displacement is smaller than the relief;
- the strength and independence of the supporting evidence;
- feasibility preconditions — financing, jurisdiction, permitting, operator
  agreement — stated rather than assumed;
- whether a cheaper coordination or regulatory change would achieve the same
  relief.

A reader who disagrees with a ranking must be able to see which criterion the
argument turned on. A number would hide precisely that.

## 6. Two tiers, and why the register is not empty

A strict gate — publish nothing until a corridor record is validated — would be
defensible, and it would also make the register useless during the entire period
when the method is being built. The register therefore has two tiers.

**`candidate`.** May be authored before any corridor record is validated. Must
carry `evidence_sufficiency: insufficient`, and is published under an explicit
non-citable notice. A candidate is a structured hypothesis about where a
constraint lies and what would relieve it. It is the analytical to-do list, and
it is honest about being one.

**`validated`.** Requires a validated corridor record, at least one evidence
reference, and `evidence_sufficiency` of `sufficient` or
`sufficient_for_qualified_publication`. The schema enforces all three
conditionally on the status value, so the tiers cannot be blurred by an author in
a hurry.

The distinction must be visible wherever interventions are displayed. A reader
who cannot tell a hypothesis from a finding has been misled, whatever the prose
around it says.

## 7. Falsification

Every intervention states what would show it to be the wrong intervention for its
bottleneck. Not what would make it expensive or politically difficult — what
would make it *incorrect*: evidence that the targeted constraint is not binding
for the relevant flow families, that the relief is absorbed by the successor
constraint, or that an untreated adjacent constraint dominates the effect.

An intervention that cannot fail is not a finding.

## 8. What this dossier does not authorise

- Ranking works across corridors whose records are not comparable in scope.
- Publishing an intervention whose only evidence is its sponsor's own material.
- Aggregating interventions into a global investment figure. The evidence table
  does not support that arithmetic, and a total would be read as a measurement.
- Presenting a `candidate` without its non-citable notice.

## 9. Current state

No corridor record is validated, therefore **no intervention is validated**. Any
entry in the register today is a candidate, and the register renders as such.
Interventions become answerable in Phase 6, once the Middle Corridor pilot has
produced a validated record and a bottleneck register.
