// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path')
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '个人生活工作日常存储',//标签页前面由三个部分构成的，这是第二个地方
  tagline: '',//标签页前面由三个部分构成的，这是第三个地方
  url: 'https://chirophy.online',
  baseUrl: '/wiki',
  onBrokenLinks: 'ignore',//当 Docusaurus 检测到任何无效的链接时所应采取的行为
  onBrokenMarkdownLinks: 'warn',//当 Docusaurus 检测到任何无效的 markdown 链接时，Docusaurus 应该采取的行为。
  favicon: 'img/favicon.ico',
  //themes: ['@docusaurus/theme-search-algolia'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.
  projectName: 'chirophy.github.io',
  baseUrlIssueBanner: true,
  titleDelimiter: '🔸',

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
          blogSidebarTitle: '人生旅程',
          //postsPerPage: 'ALL',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        }
      }),
    ],
  ],

  plugins: [
    path.resolve(__dirname, './src/plugin/plugin-baidu-analytics'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
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
      metadata: [{name: 'keywords', content: 'chirophy,blog,javascript,typescript,python,nodejs,react,前端,后端'}],//seo

      //页面上方横条文字
      announcementBar: {
        id: 'support_us',
        content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/chirophy/chirophy.github.io">GitHub</a>',
        //backgroundColor: '#00FFFF',
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
          {
            type: 'search',
            position: 'right',
          },
          {
            //跳转页面
            label: '📘Wiki',
            position: 'right',
            items: [
              {
                label: '📖技术笔记',
                to: 'docs/Notes/home',
              },
              {
                label: '🎮Game',
                to: 'docs/Game/intro',
              },
            ],
          },
          {
            //跳转blog页面
            to: '/blog/welcome',
            label: '🌈Blog',
            position: 'right',
          },
          {
            //导航界面
            label: '🧭导航',
            position: 'right',
            to: 'navigation'
          },
          {
            href: 'https://github.com/chirophy',
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: ':)',
            items: [
              {
                label: '🏡首页',
                to: '/',
              },
              {
                label: '🦸‍♂️关于我',
                to: '/about',
              },
              {
                label: '🎮Game',
                to: '/docs/Game/intro',
              },
              {
                label: '🖼️Images',
                href: 'http://img.chirophy.online/',
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
                label: 'Netlify',
                to: 'https://chirophy.netlify.app',
              },
              {
                label: '静态',
                to: 'https://chirophy.github.io',
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
                label: '📑标签',
                to: '/blog/tags/',
              },
              {
                  label:'🌏时空地图',
                  href:'https://www.allhistory.com/map'
              },
              {
                label:'📝汉语反向词典',
                href: 'https://wantwords.net',
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

        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 4,
        },
      },
      giscus: {
        repo: 'chirophy/chirophy.github.io',
        repoId: 'R_kgDOHWD-zw',
        category: 'Announcements',
        categoryId: 'DIC_kwDOHWD-z84CQZGW',
        mapping: 'url',
        lang: 'zh-CN',
    },



    }),
};

module.exports = config;