import React from 'react';
import geo from '@site/src/data/geo.json';

// Equirectangulaire, avec l'axe des longitudes reduit par le cosinus de la
// latitude de reference : sans cela le cadre s'etire horizontalement et le
// corridor parait deux fois plus long qu'il n'est.
const LAT0 = 41;
const K = Math.cos((LAT0 * Math.PI) / 180);
// Le SVG s'etire a la largeur du conteneur : une police exprimee en degres
// grandit avec lui. En projetant dans un espace d'environ mille unites, une
// unite vaut un pixel a la largeur minimale, et les tailles redeviennent
// previsibles — meme discipline que le schema.
const S = 1000 / ((126 - 18) * K);
const project = (lon: number, lat: number): [number, number] => [lon * K * S, -lat * S];

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

const toLine = (coords: number[][]): string =>
  coords
    .map(([lon, lat], i) => {
      const [x, y] = project(lon, lat);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

type Leg = {from: string; to: string; mode: string; status: string; coords: number[][]};
const legs = geo.legs as Leg[];

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
                  stroke="var(--wf-coast)" strokeWidth={1.4} fillRule="evenodd" />
          ))}
          {(geo.lakes as any[]).map((shape, i) => (
            <path key={`lake-${i}`} d={toPath(shape)} fill="var(--wf-water)"
                  stroke="var(--wf-coast)" strokeWidth={1.0} />
          ))}

          {legs.map((leg) => (
            <path
              key={`${leg.from}-${leg.to}`}
              d={toLine(leg.coords)}
              fill="none"
              stroke={leg.mode === 'ferry' ? 'var(--wf-alert)' : 'var(--wf-route)'}
              strokeWidth={leg.mode === 'ferry' ? 4 : 5}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray={leg.mode === 'ferry' ? '14 10' : undefined}>
              <title>
                {leg.mode === 'ferry'
                  ? `${leg.from} → ${leg.to}: Caspian crossing, no rail — declared connector`
                  : `${leg.from} → ${leg.to}: OpenStreetMap rail geometry`}
              </title>
            </path>
          ))}

          {(geo.nodes as any[]).map((n) => {
            const [x, y] = project(n.lon, n.lat);
            const flagged = Boolean(n.bottleneck);
            return (
              <g key={`${n.segment}-${n.place}`}>
                <circle cx={x} cy={y} r={flagged ? 11 : 7}
                        fill={flagged ? 'var(--wf-alert)' : 'var(--wf-node)'}
                        stroke="var(--wf-water)" strokeWidth={2.2}>
                  <title>{`${n.segment}. ${n.name} — ${n.place}${flagged ? ' (hypothesised bottleneck)' : ''}`}</title>
                </circle>
                {!n.labelHidden && (
                  <text x={x + n.labelDx * K * S} y={y + n.labelDy * S}
                        textAnchor={n.labelAnchor} fontSize={14} fill="var(--wf-map-label)"
                        stroke="var(--wf-water)" strokeWidth={3.5} paintOrder="stroke"
                        fontWeight={600}>
                    {n.place}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="wf-muted">
        Solid line: {geo.railLengthKm.toLocaleString('en')} km of rail geometry, {geo.railSource}.
        Dashed line: the Caspian crossing, where no rail exists — a declared connector, not a
        shipping lane. Basemap: {geo.basemapSource}. Ganja and Kars carry a dot without a label, the
        Caucasus nodes sitting too close together for horizontal type; the schematic below names all
        ten segments.
        <br />
        <b>What the rail line is, and is not.</b> {geo.railMethod} It asserts nothing about capacity,
        ownership, gauge or operating status, and is superseded by the corridor record’s own segment
        geometry once that record is validated.
      </figcaption>
    </figure>
  );
}
