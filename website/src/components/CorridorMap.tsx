import React from 'react';
import geo from '@site/src/data/geo.json';

// Equirectangulaire, avec l'axe des longitudes reduit par le cosinus de la
// latitude de reference : sans cela le cadre s'etire horizontalement et le
// corridor parait deux fois plus long qu'il n'est.
const LAT0 = 41;
const K = Math.cos((LAT0 * Math.PI) / 180);
const project = (lon: number, lat: number): [number, number] => [lon * K, -lat];

const [lonMin, latMin, lonMax, latMax] = geo.bbox as number[];
const [x0, y1] = project(lonMin, latMin);
const [x1, y0] = project(lonMax, latMax);
const VIEW = `${x0} ${y0} ${x1 - x0} ${y1 - y0}`;

const toPath = (shape: any): string => {
  const polygons = shape.type === 'Polygon' ? [shape.coordinates] : shape.coordinates;
  return polygons
    .map((polygon: number[][][]) =>
      polygon
        .map((ring) =>
          ring
            .map(([lon, lat], i) => {
              const [x, y] = project(lon, lat);
              return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
            })
            .join(' ') + ' Z',
        )
        .join(' '),
    )
    .join(' ');
};

const routePath = (geo.route as number[][])
  .map(([lon, lat], i) => {
    const [x, y] = project(lon, lat);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
  })
  .join(' ');

export default function CorridorMap(): React.JSX.Element {
  return (
    <figure className="wf-map">
      <div className="wf-scroll">
        <svg
          viewBox={VIEW}
          className="wf-map-svg"
          role="img"
          aria-label="Indicative map of the Middle Corridor, from East Asia to the European network interfaces, crossing the Caspian Sea.">
          <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill="var(--wf-water)" />
          {(geo.land as any[]).map((shape, i) => (
            <path key={`land-${i}`} d={toPath(shape)} fill="var(--wf-land)"
                  stroke="var(--wf-coast)" strokeWidth={0.12} fillRule="evenodd" />
          ))}
          {(geo.lakes as any[]).map((shape, i) => (
            <path key={`lake-${i}`} d={toPath(shape)} fill="var(--wf-water)"
                  stroke="var(--wf-coast)" strokeWidth={0.08} />
          ))}

          <path d={routePath} fill="none" stroke="var(--wf-route)" strokeWidth={0.55}
                strokeLinejoin="round" strokeLinecap="round" strokeDasharray="1.6 0.9" />

          {(geo.nodes as any[]).map((n) => {
            const [x, y] = project(n.lon, n.lat);
            const flagged = Boolean(n.bottleneck);
            return (
              <g key={`${n.segment}-${n.place}`}>
                <circle cx={x} cy={y} r={flagged ? 0.95 : 0.6}
                        fill={flagged ? 'var(--wf-alert)' : 'var(--wf-node)'}
                        stroke="var(--wf-water)" strokeWidth={0.18}>
                  <title>{`${n.segment}. ${n.name} — ${n.place}${flagged ? ' (hypothesised bottleneck)' : ''}`}</title>
                </circle>
                <text x={x} y={y - 1.5} textAnchor="middle" fontSize={1.5}
                      fill="var(--wf-map-label)" stroke="var(--wf-water)" strokeWidth={0.45}
                      paintOrder="stroke">
                  {n.place}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="wf-muted">
        Basemap: {geo.basemapSource}. <b>The alignment is {geo.geometryStatus}.</b> {geo.note} It
        asserts nothing about capacity, ownership, gauge or operating status, and is superseded by
        the corridor record’s own segment geometry once that record is validated.
      </figcaption>
    </figure>
  );
}
