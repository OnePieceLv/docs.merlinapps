const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '牛牛ABC',
  tagline: 'Make your life easily',
  url: 'https://nengxuehui.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OnePieceLv', // Usually your GitHub org/user name.
  projectName: 'docs.merlinapps', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'doc',
          docId: 'Privacy & Terms/privacy',
          position: 'right',
          label: 'Privacy & Terms',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/OnePieceLv/docs.merlinapps.git',
          label: 'Eidt on GitHub',
          position: 'right',
        },
      ],
    },
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh-cn'],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Nengxuehui, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl:
            'https://github.com/OnePieceLv/docs.merlinapps.git',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
