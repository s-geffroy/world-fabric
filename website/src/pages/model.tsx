import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import coverage from '@site/src/data/coverage.json';

const EPISTEMIC = [
  {
    id: 'observed',
    text: 'A fact, state or measurement treated as having existed in the real world during the stated valid time. Confidence still applies.',
  },
  {
    id: 'expected',
    text: 'A future or uncertain state attributed to an issuer, contract, plan, analyst or model. Issuer, method and issue date are retained where material.',
  },
  {
    id: 'scenario',
    text: 'A hypothetical value or state used in a stress test. Never part of the observed baseline.',
  },
];

// Les treize dimensions de la table de preuves du pilote transcaspien.
const EVIDENCE = [
  'throughput',
  'end-to-end transit time',
  'transit-time variability',
  'service frequency',
  'regularity and reliability',
  'rail segment capacity',
  'Caspian port handling',
  'ferry and crossing capacity',
  'border-processing time',
  'modal-transfer burden',
  'indicative cost, where comparable',
  'asset availability',
  'substitution options',
];

const TRANSFORMATION = [
  'significant change on at least two analytical dimensions',
  'effect on at least two segments or functional links',
  'persistence, or substantial irreversible investment',
  'operational evidence, not announcement',
  'major objections considered',
  'explicit human validation',
];

const FAMILY_LABEL: Record<string, string> = {
  maritime: 'Maritime',
  rail: 'Rail',
  road: 'Road',
  inland_waterway: 'Inland waterways',
  intermodal_logistics: 'Intermodal logistics',
  air_cargo: 'Air cargo',
  energy: 'Energy transport and transfer',
  digital: 'Digital infrastructure',
  border_coordination: 'Border and logistics coordination',
  strategic_storage: 'Strategic storage',
};

const LEVEL_LABEL: Record<string, string> = {
  L1_global_structural: 'L1 — Global structural',
  L2_macro_regional_structural: 'L2 — Macro-regional structural',
  L3_strategic_connector: 'L3 — Strategic connector',
};

export default function Model(): React.JSX.Element {
  return (
    <Layout
      title="Understand the Model"
      description="The analytical rules behind World Fabric: three epistemic states, no single score, a short causal chain from project to corridor metric.">
      <main className="container margin-vert--lg">
        <h1>Understand the Model</h1>
        <p className="wf-lead">
          Three rules carry most of the weight. They exist to stop the two failures that make
          infrastructure analysis unreliable: treating an announcement as a measurement, and
          compressing a system into a single number.
        </p>

        <h2>1 — Three epistemic states, never interchangeable</h2>
        <p>Every material datum carries one of three states.</p>
        <div className="wf-grid">
          {EPISTEMIC.map((e) => (
            <div key={e.id} className="wf-panel">
              <h3>{e.id}</h3>
              <p className="wf-muted">{e.text}</p>
            </div>
          ))}
        </div>
        <p className="wf-statement">
          Conversion from <code>expected</code> to <code>observed</code> requires new evidence. It is
          never an automatic time-based transition.
        </p>
        <p className="wf-muted">
          Scenario output never contaminates the observed baseline. See{' '}
          <Link to="/research/reference/epistemic-status">Epistemic Status</Link>.
        </p>

        <h2>2 — No single primary score</h2>
        <p>
          A conclusion rests on a multidimensional evidence table, not on one index. A composite
          indicator may be computed, but only as a secondary and decomposable estimate — it does not
          replace the table. For the Middle Corridor pilot, comparable evidence is sought on
          thirteen dimensions:
        </p>
        <ul className="wf-grid" style={{listStyle: 'none', paddingLeft: 0}}>
          {EVIDENCE.map((d) => (
            <li key={d} className="wf-panel">{d}</li>
          ))}
        </ul>

        <h2>3 — A project earns its effect through a short chain</h2>
        <p className="wf-chain wf-statement">
          Project → asset change → functional-link change → corridor metric change
        </p>
        <p>
          Every material project assessment must also document the adjacent constraints and
          counter-effects capable of limiting, delaying, displacing or neutralising the announced
          benefit. A project that removes one constraint and creates another has not improved the
          system; it has moved the problem.
        </p>

        <h2>What counts as a transformation</h2>
        <p>
          A system transformation is not a headline. A candidate becomes validated only when it
          satisfies all of the following:
        </p>
        <ol>
          {TRANSFORMATION.map((c) => <li key={c}>{c}</li>)}
        </ol>
        <p className="wf-muted">
          Machines may surface candidate patterns; a canonical transformation requires human
          analytical validation. See{' '}
          <Link to="/research/validation/validation-protocol">the validation protocol</Link>.
        </p>

        <h2>What is in scope</h2>
        <p>Every included infrastructure or project receives one primary strategic level.</p>
        <div className="wf-grid">
          {coverage.levels.map((l) => (
            <div key={l.id} className="wf-panel">
              <h3>{LEVEL_LABEL[l.id] ?? l.id}</h3>
              <p className="wf-muted">{l.definition}</p>
            </div>
          ))}
        </div>
        <p className="margin-top--md">
          Low economic value alone is never a reason for exclusion when the object performs a
          structurally important function. Ten infrastructure families are covered:
        </p>
        <ul>
          {coverage.families.map((f) => (
            <li key={f}>{FAMILY_LABEL[f] ?? f} <code>{f}</code></li>
          ))}
        </ul>

        <h2>What the model deliberately is not</h2>
        <p>
          World Fabric does not claim to be a complete digital twin of the world economy. The data
          model may stay compatible with future sophistication, but the V1 implementation remains
          narrow: new concepts or engines are added only when a demonstrated research failure
          requires them. The full reasoning is in the{' '}
          <Link to="/research/foundation/charter">charter</Link> and the{' '}
          <Link to="/research/foundation/architecture-decisions">architecture decisions</Link>.
        </p>
      </main>
    </Layout>
  );
}
