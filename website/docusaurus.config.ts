import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = process.env.GITHUB_REPOSITORY_OWNER ?? 'REPLACE_OWNER';
const repositoryName = (process.env.GITHUB_REPOSITORY ?? 'REPLACE_OWNER/world-fabric').split('/')[1];
const isUserSite = repositoryName === `${organizationName}.github.io`;
const ligneDeCreteUrl = process.env.LIGNE_DE_CRETE_URL;

const config: Config = {
  title: 'World Fabric',
  tagline: 'Observatory of Global Strategic Capacity',
  url: `https://${organizationName}.github.io`,
  baseUrl: isUserSite ? '/' : `/${repositoryName}/`,
  organizationName,
  projectName: repositoryName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {sidebarPath: './sidebars.ts', routeBasePath: 'research'},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'World Fabric',
      items: [
        {to: '/world', label: 'Explore the World', position: 'left'},
        {to: '/model', label: 'Understand the Model', position: 'left'},
        {to: '/interventions', label: 'What to Build', position: 'left'},
        {to: '/research', label: 'Inspect the Research', position: 'left'},
        ...(ligneDeCreteUrl ? [{href: ligneDeCreteUrl, label: 'Ligne de Crête', position: 'right' as const}] : []),
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'World Fabric', items: [{label: 'Research', to: '/research'}, {label: 'What to Build', to: '/interventions'}]},
      ],
      copyright: `World Fabric — stand-alone research project.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
