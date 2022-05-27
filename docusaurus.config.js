// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WWWiki',//标签页前面由三个部分构成的，这是第二个地方
  tagline: '仍在创作中...',//标签页前面由三个部分构成的，这是第三个地方
  url: 'https://wiki.chirophy.online',
  baseUrl: '/',
  onBrokenLinks: 'throw',//当 Docusaurus 检测到任何无效的链接时所应采取的行为
  onBrokenMarkdownLinks: 'warn',//当 Docusaurus 检测到任何无效的 markdown 链接时，Docusaurus 应该采取的行为。
  favicon: 'img/favicon.ico',
  //themes: ['@docusaurus/theme-search-algolia'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    //自己修改的其实是zh-CN
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'ChiroPhy’s blog!',
          blogDescription: '吐槽槽~',
          blogSidebarTitle: '近况',
          //postsPerPage: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      //新加的侧边栏收缩
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      metadata: [{name: 'keywords', content: 'chirophy'}],


      navbar: {
        title: '奇奇怪怪的Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/shiro.png',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docusaurus指南',
          },*/
          {
            //跳转页面
            to: '/docs/home',
            label: '📘Wiki',
            position: 'right'
          },
          {
            //跳转页面
            to: '/blog/welcome',
            label: '🌈Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/chirophy',
            label: '🚀GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docusaurus教程',
                to: '/docs/category/docusaurus教程',
              },
              {
                label: 'Linux',
                to: '/docs/category/linux',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: '🏠主页',
                href: 'https://chirophy.online',
              },
              {
                label: '3️⃣线线线',
                href: 'https://wiki.qc47.net/',
              },
              /*{
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },*/
            ],
          },
          {
            title: 'More',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label:'👍ZSC常用网站',
                to: '/zsclinks'
            },
              {
                  label:'💻NextCloud',
                  href:'http://n.chirophy.online'
              },
              {
                label: '静态',
                href: 'https://chirophy.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Power by ChiroPhy | 粤ICP备2020137394号 | Built with Docusaurus.`,
        //Copyright: `${new Date().getFullYear()}Power ChiroPhy | 粤ICP备2020137394号 | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      //algolia搜索
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',
  
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
  
        indexName: 'YOUR_INDEX_NAME',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;