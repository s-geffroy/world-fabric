import React from 'react';
import Link from '@docusaurus/Link';
import geo from '@site/src/data/geo.json';

// Les dix segments du plan pilote, dans l'ordre. Un noeud par segment : Türkiye
// en porte deux dans la geometrie (Kars et Istanbul), le schema ne montre que
// le segment.
type Node = {segment: number; name: string; place: string; role: string; bottleneck?: string | null};

const SEGMENTS: Node[] = [];
for (const n of geo.nodes as Node[]) {
  if (!SEGMENTS.some((s) => s.segment === n.segment)) SEGMENTS.push(n);
}

const ROLE_LABEL: Record<string, string> = {
  origin: 'origin',
  border: 'border interface',
  rail: 'rail haul',
  port: 'port handling',
  crossing: 'maritime crossing',
  interface: 'network interface',
};

const STEP = 120;
const W = STEP * SEGMENTS.length;
const H = 210;
const Y = 96;

export default function CorridorSchematic(): React.JSX.Element {
  return (
    <figure className="wf-map">
      <div className="wf-scroll">
        <svg viewBox={`0 0 ${W} ${H}`} className="wf-schematic-svg" role="img"
             aria-label="The ten segments of the Middle Corridor in order, with the hypothesised bottleneck at the Caspian crossing.">
          <line x1={STEP / 2} y1={Y} x2={W - STEP / 2} y2={Y}
                stroke="var(--wf-route)" strokeWidth={3} strokeLinecap="round" />

          {SEGMENTS.map((s, i) => {
            const x = STEP / 2 + i * STEP;
            const flagged = Boolean(s.bottleneck);
            return (
              <g key={s.segment}>
                {flagged && (
                  <circle cx={x} cy={Y} r={20} fill="none" stroke="var(--wf-alert)"
                          strokeWidth={1.5} strokeDasharray="3 3" />
                )}
                <circle cx={x} cy={Y} r={flagged ? 11 : 8}
                        fill={flagged ? 'var(--wf-alert)' : 'var(--wf-node)'} />
                <text x={x} y={Y + 4} textAnchor="middle" fontSize={11}
                      fill="var(--wf-on-node)" fontWeight={600}>
                  {s.segment}
                </text>

                <text x={x} y={Y - 34} textAnchor="middle" fontSize={12}
                      fill="var(--wf-map-label)" fontWeight={600}>
                  {s.place}
                </text>
                <text x={x} y={Y - 20} textAnchor="middle" fontSize={10} fill="var(--wf-muted)">
                  {ROLE_LABEL[s.role] ?? s.role}
                </text>

                <foreignObject x={x - STEP / 2 + 6} y={Y + 22} width={STEP - 12} height={80}>
                  <div className="wf-schematic-label">{s.name}</div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="wf-muted">
        The ten segments of the{' '}
        <Link to="/research/pilots/middle-corridor/pilot-plan">pilot plan</Link>, in order. Segment
        5 carries the hypothesised bottleneck that the first{' '}
        <Link to="/interventions">candidate intervention</Link> targets. The decomposition is itself
        provisional: the pilot plan lists it as something to validate through research, not as an
        established structure.
      </figcaption>
    </figure>
  );
}
