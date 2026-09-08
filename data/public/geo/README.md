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

## Corridor geometry — `middle-corridor.geojson`

**The alignment is indicative and is not a canonical record.**

Node coordinates are approximate positions of named, publicly identifiable
places — ports, border interfaces, rail hubs. The line drawn between them is a
schematic connector, not a surveyed route: it does not follow track alignment,
shipping lane or road, and it asserts nothing about capacity, ownership,
gauge or operating status.

The file carries `geometry_status: indicative` on every feature, and the site
repeats the caveat wherever the map is displayed. When the Middle Corridor
canonical record is validated, its own segment geometry supersedes this file.
