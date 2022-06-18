// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WWWiki',//标签页前面由三个部分构成的，这是第二个地方
  tagline: '',//标签页前面由三个部分构成的，这是第三个地方
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
  projectName: 'chirophy.github.io',

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
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'ChiroPhy’s blog!',
          //blogDescription: '吐槽槽~',
          blogSidebarTitle: '近况',
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
      metadata: [{name: 'keywords', content: 'chirophy'}],//seo

      //页面上方横条文字
      announcementBar: {
        id: 'support_us',
        content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/chirophy/chirophy.github.io">GitHub</a>',
        backgroundColor: '#00FFFF',
        textColor: '#091E42',
        isCloseable: true,
      }, 

      navbar: {
        title: 'ChiroPhy’s Wiki',
        hideOnScroll: true,
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
            type: 'search',
            position: 'right',
          },
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
              {
                label: 'Elden Ring',
                to: '/docs/category/elden-ring/',
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
              {
                label: '🤵🏼畅总',
                href: 'https://xchub.cn/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label:'👍ZSC常用网站',
                to: '/zsclinks'
              },
              {
                  label:'💻NextCloud',
                  href:'http://n.chirophy.online'
              },
              {
                label:'📝汉语反向词典',
                href: 'https://wantwords.net',
              },
              {
                label: 'Netlify',
                href: 'https://chirophy.netlify.app',
              },
              {
                label: '静态',
                href: 'https://chirophy.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Power by ChiroPhy | <a href="https://beian.miit.gov.cn/">粤ICP备2020137394号</a> | Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      colorMode: {
        respectPrefersColorScheme: true
      },

      //algolia搜索
      algolia: {
        // The application ID provided by Algolia
        appId: '7JTWMD9JUI',
  
        // Public API key: it is safe to commit it
        apiKey: '265666200fd0e0b5d5a6404de2813875',
  
        indexName: 'chirophy',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'https://wiki.chirophy.online',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;