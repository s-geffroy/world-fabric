import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import register from '@site/src/data/interventions.json';

const CRITERIA = [
  'how binding the targeted bottleneck is, and for which flow families',
  'how many segments or functional links the relief would reach',
  'whether the displacement is smaller than the relief',
  'the strength and independence of the supporting evidence',
  'feasibility preconditions — financing, jurisdiction, permitting, operator agreement',
  'whether a cheaper coordination or regulatory change would achieve the same relief',
];

const REFUSED = [
  'Ranking works across corridors whose records are not comparable in scope.',
  'Publishing an intervention whose only evidence is its sponsor’s own material.',
  'Aggregating interventions into a global investment figure.',
  'Presenting a candidate without its non-citable notice.',
];

type Entry = {
  id: string; summary: string; type: string; status: string;
  bottleneck: string; displacement: string; sufficiency: string;
  confidence: string; evidenceCount: number;
};

const entries = register.entries as Entry[];
const validated = entries.filter((e) => e.status === 'validated');
const candidates = entries.filter((e) => e.status !== 'validated');

export default function Interventions(): React.JSX.Element {
  return (
    <Layout
      title="What Should Be Built"
      description="The World Fabric intervention register: reasoned proposals to relieve documented bottlenecks, with their displacement, counter-effects and falsification conditions.">
      <main className="container margin-vert--lg">
        <h1>What Should Be Built</h1>
        <p className="wf-lead">
          The observatory exists to describe systems as they are. But the question
          underneath it is not only descriptive:
        </p>
        <p className="wf-statement">
          Which works would actually relieve the constraints that bind the systems carrying global
          flows?
        </p>
        <p className="wf-lead">
          Lists of desirable infrastructure already circulate, and their weakness is always the
          same: they enumerate ambitions rather than relieve identified constraints. This register
          answers the question under conditions that make the answer checkable — or refuses to
          answer it.
        </p>

        <h2>An intervention must be earned by a bottleneck</h2>
        <p className="wf-chain wf-statement">
          Corridor record → bottleneck register → intervention
        </p>
        <p>
          An intervention that cannot name the documented bottleneck it targets is not a weak
          intervention; it is not an intervention at all. The constraint has to be established
          independently, before anyone thinks about the remedy. That single rule is what separates
          this register from a wish list.
        </p>
        <div className="wf-grid">
          <div className="wf-panel">
            <h3>Permanently a scenario</h3>
            <p className="wf-muted">
              The claimed effect carries <code>epistemic_status: scenario</code>, fixed by the
              schema. Building the work does not convert the claim — that requires new evidence on
              the corridor metric. Construction shows something was built, not that the system
              improved.
            </p>
          </div>
          <div className="wf-panel">
            <h3>Displacement is required</h3>
            <p className="wf-muted">
              Every entry names the constraint that becomes binding once the targeted one is
              relieved. Widening a segment usually moves the bottleneck; a proposal that does not
              say where it moves is incomplete, not optimal.
            </p>
          </div>
          <div className="wf-panel">
            <h3>No priority score</h3>
            <p className="wf-muted">
              Priority is argued in words against documented criteria and selected by a human. A
              number would hide the criterion the argument actually turned on.
            </p>
          </div>
        </div>

        <h2>The register</h2>
        <p>
          Two tiers, and the difference is visible on every entry. A{' '}
          <b>candidate</b> is a structured hypothesis about where a constraint lies and what would
          relieve it — the analytical to-do list, honest about being one. A <b>validated</b>{' '}
          intervention requires a validated corridor record, at least one evidence reference and
          sufficient evidence. The schema enforces both conditions on the status field, so the tiers
          cannot be blurred by an author in a hurry.
        </p>

        <div className="wf-figure">
          <div><b>{validated.length}</b> validated</div>
          <div><b>{candidates.length}</b> candidates</div>
          <div><b>{register.types.length}</b> intervention types</div>
        </div>

        {entries.length === 0 ? (
          <div className="wf-panel">
            <h3>The register is empty</h3>
            <p>
              No corridor record is validated, so no intervention is validated — and no candidate
              has been authored yet. This is the state of the work, not a rendering failure.
            </p>
            <p className="wf-muted">
              Interventions become answerable once the{' '}
              <Link to="/research/pilots/middle-corridor/pilot-plan">Middle Corridor pilot</Link>{' '}
              has produced a validated record and its bottleneck register. Until then, publishing a
              ranked list of works would contradict the{' '}
              <Link to="/research/foundation/charter">charter</Link> this site publishes.
            </p>
          </div>
        ) : (
          <div className="wf-scroll">
            <table className="wf-matrix">
              <thead>
                <tr>
                  <th scope="col">Intervention</th>
                  <th scope="col">Targets</th>
                  <th scope="col">Next binding constraint</th>
                  <th scope="col">Type</th>
                  <th scope="col">Tier</th>
                  <th scope="col">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((e) => (
                  <tr key={e.id}>
                    <th scope="row">{e.summary || e.id}</th>
                    <td>
                      <Link to="/world">{e.bottleneck}</Link>
                    </td>
                    <td>{e.displacement}</td>
                    <td><code>{e.type}</code></td>
                    <td>
                      {e.status === 'validated'
                        ? <b>validated</b>
                        : <span className="wf-muted">{e.status} — not citable</span>}
                    </td>
                    <td>{e.evidenceCount} · {e.sufficiency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <h2>How priority is argued</h2>
        <p>A <code>priority_rationale</code> is expected to engage with:</p>
        <ul>
          {CRITERIA.map((c) => <li key={c}>{c}</li>)}
        </ul>

        <h2>What this does not authorise</h2>
        <ul>
          {REFUSED.map((r) => <li key={r}>{r}</li>)}
        </ul>
        <p className="wf-muted">
          The full reasoning is in{' '}
          <Link to="/research/intervention/intervention-doctrine">Dossier 6</Link>, and the field
          contract in the{' '}
          <Link to="/research/intervention/intervention-register-spec">register specification</Link>.
          Entries are authored in <code>{register.source}</code> and validated against the schema on
          every push.
        </p>
      </main>
    </Layout>
  );
}
