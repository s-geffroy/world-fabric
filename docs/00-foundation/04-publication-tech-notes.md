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

The public link to Ligne de Crête is intentionally supplied through the `LIGNE_DE_CRETE_URL` environment variable because the canonical URL was not fixed in the technical specification. This avoids inventing a domain.
