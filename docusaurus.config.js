// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CitizenIV Docs',
  tagline: 'gta iv multiplayer',
  url: 'https://citizeniv.net',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'citizenfx-reloaded', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/citizenfx-reloaded/docs/edit/master/',
	  routeBasePath: '/',
        },
	blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
	defaultMode: 'dark',
	disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: 'CitizenIV Docs',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            label: 'Docs',
  	    position: 'left',
          },
          {
            href: 'https://citizeniv.net',
            label: 'Home',
            position: 'left',
          },
          {
            href: 'https://github.com/citizenfx-reloaded/docs',
            label: 'GitHub',
            position: 'left',
          },
	  {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} CitizenIV. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
	additionalLanguages: ['lua'],
      },
    }),
};

module.exports = config;
