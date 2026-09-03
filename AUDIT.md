# Package Audit — 2026-08-13

## Passed

- All JSON files parse successfully.
- All YAML/YML files parse successfully.
- `templates/corridor-record.template.yaml` validates against `schemas/corridor-record.schema.json`.
- Coverage matrix contains exactly 600 cells: 20 regions × 10 infrastructure families × 3 strategic levels.
- Python validation script compiles.
- Documentation is synchronised from canonical `/docs` into `/website/docs` by `scripts/sync_docs.py`.
- ZIP integrity test passes.

## Not executed in the build environment

- Full `npm install` / `npm run build` of the Docusaurus site was not completed because dependency retrieval exceeded the execution window available during packaging.
- No deployment to a real GitHub repository was attempted because repository owner/name and publication URL were not supplied.

## Deliberately unresolved

- Software/data/documentation licences are not selected; see `LICENSE_PENDING.md`.
- The Ligne de Crête URL is not hard-coded. Set `LIGNE_DE_CRETE_URL` in the deployment environment.
- The Middle Corridor package contains the research plan and schemas, not fabricated pilot data. Empirical collection is the next research phase.

## Deployment follow-up — 2026-09-03

Two items listed above are now closed.

- `npm install` and `npm run build` were executed for the first time, in CI, on
  the `deploy-pages` workflow. Three defects that would have failed the build
  were fixed beforehand: a footer link to the non-existent `/research/data`
  under `onBrokenLinks: 'throw'`, a `favicon` entry pointing at a file absent
  from `website/static/`, and a call to `python` where only `python3` is
  guaranteed on the runner.
- The repository is `s-geffroy/world-fabric`; publication is
  `https://s-geffroy.github.io/world-fabric/`. `baseUrl` is derived from
  `GITHUB_REPOSITORY` rather than hard-coded. `LIGNE_DE_CRETE_URL` is set in
  the workflow environment and points at the Ligne de Crête entry page for
  this research work.

Still deliberately unresolved: the licence decision, and the absence of
fabricated Middle Corridor pilot data.
