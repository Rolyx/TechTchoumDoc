// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Next.js',
  tagline: 'Apprendre Next.js étape par étape 🚀',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ✅ Domaine personnalisé
  url: 'http://develo.thetchoum.com/',
  baseUrl: '/',

  organizationName: 'Rolyx', // ✅ juste ton pseudo GitHub
  projectName: 'TechTchoumDoc', // ✅ ton repo

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Rolyx/TechTchoumDoc/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Next.js Docs',
      logo: {
        alt: 'Logo Next.js',
        src: 'img/TTClogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Rolyx/TechTchoumDoc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Ressources',
          items: [
            {
              label: 'Site officiel Next.js',
              href: 'https://nextjs.org/docs',
            },
            {
              label: 'Vercel',
              href: 'https://vercel.com',
            },
          ],
        },
        {
          title: 'Suivez-moi',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Rolyx/TechTchoumDoc/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ma Documentation Next.js. Fait avec ❤️ et Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
