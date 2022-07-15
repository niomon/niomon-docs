// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Niomon Developer Docs',
  tagline: 'Authentication layer for Web3',
  url: 'https://docs.niomon.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'niomon', // Usually your GitHub org/user name.
  projectName: 'niomon-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/niomon/niomon-docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode:{
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Niomon Developer Docs',
        logo: {
          alt: 'Niomon',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs',
            position: 'left',
            label: 'Home',
            activeBaseRegex: 'docs/(?!category)'
          },
          {
            to: '/docs/category/quickstarts',
            position: 'left',
            label: 'Quickstarts',
          },
          {
            to: '/docs/category/api-references',
            position: 'left',
            label: 'API References',
          },
          {
            href: 'https://status.niomon.io',
            position: 'left',
            label: 'Service Status',
          },
          {
            href: 'https://admin.niomonid.com',
            position: 'right',
            label: 'Developer Sign Up/Login',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Niomon',
            items: [
              {
                label: 'Homepage',
                href: 'https://niomon.io/',
              },
              {
                label: 'Pricing',
                href: 'https://niomon.io/pricing',
              },
              {
                label: 'Ditto',
                href: 'https://ditto.xyz',
              },
            ],
          },
          {
            title: 'Develoeprs',
            items: [
              {
                label: 'Docs Home',
                to: '/docs',
              },
              {
                label: 'Getting Support',
                to: '/docs/support',
              },
              {
                label: 'Service Status',
                href: 'https://status.niomon.io/',
              },
              {
                label: 'Admin Console',
                href: 'https://admin.niomonid.com/',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/niomon_io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/niomon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Niomon Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
  ],
};

module.exports = config;
