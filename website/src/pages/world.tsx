import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import coverage from '@site/src/data/coverage.json';

// Dix familles en colonnes : le nom complet ne tient pas, l'abreviation si.
// La legende sous le tableau retablit chaque libelle.
const FAMILY_ABBR: Record<string, string> = {
  maritime: 'MAR',
  rail: 'RAI',
  road: 'ROA',
  inland_waterway: 'IWW',
  intermodal_logistics: 'INT',
  air_cargo: 'AIR',
  energy: 'ENE',
  digital: 'DIG',
  border_coordination: 'BOR',
  strategic_storage: 'STO',
};

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

type Cell = {status: string; identified: number; validated: number; published: number};
const matrix = coverage.matrix as Record<string, Record<string, Record<string, Cell>>>;
const statusCounts = coverage.statusCounts as Record<string, number>;

export default function World(): React.JSX.Element {
  const {totals, regions, families, levels, statuses} = coverage;

  return (
    <Layout
      title="Explore the World"
      description="Coverage state of the World Fabric inventory: twenty regions by ten infrastructure families by three strategic levels.">
      <main className="container margin-vert--lg">
        <h1>Explore the World</h1>
        <p className="wf-lead">
          Global infrastructure, corridors, projects and documented transformations will be published
          here as canonical records are validated. <b>None has been yet.</b> What this page shows is
          the honest state of the inventory: what the coverage matrix intends to cover, and how much
          of it is done.
        </p>

        <div className="wf-figure">
          <div><b>{totals.cells}</b> coverage cells</div>
          <div><b>{totals.identified}</b> objects identified</div>
          <div><b>{totals.validated}</b> objects validated</div>
          <div><b>{totals.published}</b> objects published</div>
        </div>

        <p className="wf-muted">
          {regions.length} regions × {families.length} infrastructure families × {levels.length}{' '}
          strategic levels. Current distribution:{' '}
          {statuses
            .filter((s) => statusCounts[s])
            .map((s) => `${statusCounts[s]} ${s}`)
            .join(', ')}
          .
        </p>

        <h2>Coverage matrix</h2>
        <p>
          Each cell holds the three strategic levels, left to right: L1 global structural, L2
          macro-regional structural, L3 strategic connector.
        </p>

        <div className="wf-legend">
          {statuses.map((s) => (
            <span key={s}>
              <span className={`wf-dot wf-${s}`} aria-hidden="true" /> {s}
            </span>
          ))}
        </div>

        <div className="wf-scroll">
          <table className="wf-matrix">
            <thead>
              <tr>
                <th scope="col">Region</th>
                {families.map((f) => (
                  <th key={f} scope="col" title={FAMILY_LABEL[f] ?? f}>{FAMILY_ABBR[f] ?? f}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {regions.map((r) => (
                <tr key={r.id}>
                  <th scope="row">{r.name}</th>
                  {families.map((f) => (
                    <td key={f} className="wf-cell">
                      <span className="wf-levels">
                        {levels.map((l) => {
                          const cell = matrix[r.id]?.[f]?.[l.id];
                          const status = cell?.status ?? 'none';
                          return (
                            <span
                              key={l.id}
                              className={`wf-dot wf-${status}`}
                              title={`${r.name} · ${FAMILY_LABEL[f] ?? f} · ${l.id}: ${status}`}
                            />
                          );
                        })}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="wf-legend margin-top--md">
          {families.map((f) => (
            <span key={f}><code>{FAMILY_ABBR[f] ?? f}</code> {FAMILY_LABEL[f] ?? f}</span>
          ))}
        </div>

        <h2>How to read it</h2>
        <p>
          Counts are operational indicators only. Coverage status is a reviewed assessment of whether
          structurally important objects are represented and whether major known gaps are documented
          — it is not a function of how many rows exist. There is no object quota: expansion is
          governed by inclusion criteria, not by filling the grid.
        </p>
        <p className="wf-muted">
          The matrix is authored as CSV at <code>{coverage.source}</code> and derived into this page
          at build time, so it cannot show a coverage the source does not carry. See the{' '}
          <Link to="/research/global-expansion/coverage-matrix-spec">coverage matrix
          specification</Link> and{' '}
          <Link to="/research/global-expansion/global-expansion">Dossier 5</Link>.
        </p>

        <h2>What comes first</h2>
        <p>
          Expansion is deliberately gated behind three methodological stress tests: the{' '}
          <Link to="/research/pilots/middle-corridor/pilot-plan">Middle Corridor</Link>{' '}
          (multimodal terrestrial), then Suez / Red Sea (maritime chokepoint system), then the
          Europe–Asia cables (digital network). The grid stays empty until the method survives them.
        </p>
      </main>
    </Layout>
  );
}
