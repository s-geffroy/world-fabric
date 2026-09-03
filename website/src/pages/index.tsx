import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const DOSSIERS = [
  {
    to: '/research/record-method/perfect-canonical-record',
    n: 'Dossier 1',
    title: 'Perfect Canonical Record',
    text: 'What a corridor record must contain, and what it may never assert without evidence.',
  },
  {
    to: '/research/validation/validation-protocol',
    n: 'Dossier 2',
    title: 'Validation Protocol',
    text: 'Ten quality gates, four severity classes. An open P0 or P1 blocks publication.',
  },
  {
    to: '/research/pipeline/production-pipeline',
    n: 'Dossier 3',
    title: 'Production Pipeline',
    text: 'Research, normalisation, drafting, review, publication and monitoring, made reproducible.',
  },
  {
    to: '/research/industrialization/industrialization',
    n: 'Dossier 4',
    title: 'Industrialization',
    text: 'Automate consistency and generation without automating away scientific judgment.',
  },
  {
    to: '/research/global-expansion/global-expansion',
    n: 'Dossier 5',
    title: 'Global Expansion',
    text: 'Expand through the coverage matrix, after three methodological stress tests.',
  },
];

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="World Fabric"
      description="Observatory of the material systems that carry global flows: infrastructures, corridors, projects, and what they actually change in usable system capacity.">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">World Fabric</h1>
          <p className="hero__subtitle">Observe how the material systems of globalization are changing.</p>
          <div>
            <Link className="button button--primary button--lg" to="/world">Explore the World</Link>{' '}
            <Link className="button button--secondary button--lg" to="/model">Understand the Model</Link>{' '}
            <Link className="button button--secondary button--lg" to="/research">Inspect the Research</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container margin-vert--xl">
          <h2>The research question</h2>
          <p className="wf-statement">
            How are infrastructures, corridors, projects and constraints changing the effective
            capacity of the systems that carry global flows?
          </p>
          <p className="wf-lead">
            A corridor is usually described through announced capacity: so many million tonnes, so
            many days of transit, a port enlarged, a line doubled. Those figures travel from a press
            release to a report and from a report to an article, and no one asks again what changed
            in the real system.
          </p>
          <p className="wf-lead">
            Announced capacity is not available capacity. Projected traffic is not observed traffic.
            A widened port does not remove the ferry that constrains it upstream. Widening a segment
            usually displaces the bottleneck rather than removing it.
          </p>
        </section>

        <section className="container margin-bottom--xl">
          <h2>What V1 must prove</h2>
          <div className="wf-grid">
            <div className="wf-panel">
              <h3>1 — Represent</h3>
              <p>That a strategic corridor can be represented coherently: segments, functional links, assets and the evidence behind each.</p>
            </div>
            <div className="wf-panel">
              <h3>2 — Attribute</h3>
              <p>That the effect of projects on corridor capacity can be shown without confusing announced capacity with usable system capacity.</p>
            </div>
            <div className="wf-panel">
              <h3>3 — Assess</h3>
              <p>That a system-transformation assessment can be produced, documented and defended — or rejected.</p>
            </div>
          </div>
        </section>

        <section className="container margin-bottom--xl">
          <h2>The five dossiers</h2>
          <div className="wf-grid">
            {DOSSIERS.map((d) => (
              <Link key={d.to} to={d.to} className="wf-panel">
                <h3>{d.n}</h3>
                <p><b>{d.title}</b></p>
                <p className="wf-muted">{d.text}</p>
              </Link>
            ))}
          </div>
          <p className="margin-top--md">
            Read the <Link to="/research/foundation/charter">Research Charter</Link> first, then the
            dossiers in order. The <Link to="/research/foundation/roadmap">roadmap</Link> shows where
            each one sits.
          </p>
        </section>

        <section className="container margin-bottom--xl">
          <h2>Where the work stands</h2>
          <p className="wf-lead">
            <b>The method is published. The data are not.</b> What is online is the foundation:
            the charter, the five dossiers, the JSON schemas for canonical records, the controlled
            taxonomies, and an empty coverage matrix.
          </p>
          <p className="wf-lead">
            The first pilot is the <Link to="/research/pilots/middle-corridor/pilot-plan">Middle
            Corridor</Link>, over 2017–2026, published as a research plan rather than a result. Its
            hypothesis is stated to be falsified — <i>investment is increasing the effective capacity
            of the corridor faster than its structural bottlenecks are being removed</i> — and the
            conditions that would weaken it are written in advance. No pilot data have been
            fabricated to fill the gap. Two stress tests follow: the Suez / Red Sea system, then the
            Europe–Asia submarine cables.
          </p>
          <p className="wf-statement">Every important statement is traceable.</p>
          <p className="wf-muted">
            A material conclusion should be inspectable from published statement to assessment,
            observation, evidence and source. Missing evidence is made visible rather than hidden
            by prose.
          </p>
        </section>
      </main>
    </Layout>
  );
}
