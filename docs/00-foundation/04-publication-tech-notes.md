# Publication Technology Notes

## Docusaurus

The starter publication shell targets Docusaurus 3.10.x. Docusaurus supports MDX/React content and static deployment to GitHub Pages. The repository deliberately treats Docusaurus as a publication shell rather than the research model.

Official references checked on 2026-08-13:

- https://docusaurus.io/docs
- https://docusaurus.io/docs/deployment
- https://docusaurus.io/docs/installation

## GitHub Pages

The included workflow uses the GitHub Pages artifact/action pattern. Repository owner/name are resolved from GitHub environment variables at build time. If a custom domain is later used, configure it explicitly rather than hard-coding it into the research model.

## Ligne de Crête

The link back to Ligne de Crête is not part of this site: the shared Ligne de Crête kit (`https://www.ligne-de-crete.fr/kit/v1/ldc-kit.js`, declared in `scripts` of `docusaurus.config.ts`) adds a top bar and a signed footer pointing to the entry page of this work.
