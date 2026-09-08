# Geographic data

## Basemap — `source/`

`ne_110m_land.geojson` and `ne_110m_lakes.geojson` are Natural Earth 1:110m
vectors, **public domain**, taken unmodified from the `nvkelso/natural-earth-vector`
distribution. They are committed rather than fetched at build time so that the
site builds offline and the basemap cannot change under the corridor drawn on
top of it.

The Caspian Sea is an interior ring of the Eurasia land polygon in this
dataset, not a lake feature; it renders as water under an even-odd fill rule.

`scripts/build_site_data.py` crops both files to the corridor bounding box and
rounds coordinates to two decimals. Nothing is added, moved or smoothed.

## Rail alignment — `middle-corridor-rail.geojson`

**Rail geometry © OpenStreetMap contributors, ODbL 1.0.**

Each of the eight land legs is the least-cost path over the OSM `railway=rail`
graph between the named nodes. The graph was built from 48 bounding-box queries
covering the corridor (411,887 nodes); service tracks carry a x6 cost so they
are used only to bridge station connections. Endpoints snap to the nearest node
inside a component that contains both ends — snapping to the nearest node
outright had attached Xi'an to an isolated three-node stub.

Two things remain authored rather than sourced, and are declared on the map:

- the queried corridor, which is where the boxes were placed;
- the fact that **least-cost is not the route operators actually use**. That is
  a research question for the corridor record, not a property of the graph.

The Caspian leg carries `mode: ferry` and `geometry_status: indicative`: no rail
exists there, and the straight connector is not a shipping lane.

## Corridor nodes — `middle-corridor.geojson`

**The alignment is indicative and is not a canonical record.**

Node coordinates are approximate positions of named, publicly identifiable
places — ports, border interfaces, rail hubs. The line drawn between them is a
schematic connector, not a surveyed route: it does not follow track alignment,
shipping lane or road, and it asserts nothing about capacity, ownership,
gauge or operating status.

The file carries `geometry_status: indicative` on every feature, and the site
repeats the caveat wherever the map is displayed. When the Middle Corridor
canonical record is validated, its own segment geometry supersedes this file.
