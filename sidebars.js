/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Notes: [
    'Notes/home',
    {
      type: 'category',
      label: 'Docusaurus教程',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'Notes/Docusaurus/intro',
      },
      items: [
        {
          type: 'category',
          label: '基础',
          link: {
            type: 'generated-index',
          },
          items: [
            'Notes/Docusaurus/Basic/create-a-page',
            'Notes/Docusaurus/Basic/create-a-document',
            'Notes/Docusaurus/Basic/create-a-blog-post',
            'Notes/Docusaurus/Basic/markdown-features',
            'Notes/Docusaurus/Basic/deploy-your-site',
            'Notes/Docusaurus/Basic/congratulations',
          ],
        },
        {
          type: 'category',
          label: '进阶',
          link: {
            type: 'generated-index',
          },
          items: [
            'Notes/Docusaurus/Advance/manage-docs-versions',
            'Notes/Docusaurus/Advance/translate-your-site',
          ],
        },
        'Notes/Docusaurus/notice',
        'Notes/Docusaurus/sidebar',
        'Notes/Docusaurus/分页导航',
      ],
    },
    {
      type: 'category',
      label: 'Linux',
      link: {
        type: 'generated-index',
      },
      items: [
        'Notes/Linux/ssh',
        'Notes/Linux/fail2ban',
        'Notes/Linux/硬盘对拷',
        'Notes/Linux/dd命令',
        'Notes/Linux/debian',
      ],
    },
    {
      type: 'category',
      label: 'Skills',
      link: {
        type: 'generated-index',
      },
      items: [
        'Notes/Skills/git',
        'Notes/Skills/moon',
        'Notes/Skills/github',
        'Notes/Skills/ax86u',
        'Notes/Skills/run',
        'Notes/Skills/debian-pi-aarch64',
      ],
    },
    {
      type: 'category',
      label: '杂七杂八',
      link: {
        type: 'generated-index',
      },
      items: [
        'Notes/something/vs2013',
        'Notes/something/AIDA64',
        'Notes/something/emoji',
        'Notes/something/string',
        'Notes/something/MFC-problem',
        'Notes/something/NW-ZX507',
        'Notes/something/websitemodel',
        'Notes/something/常用网站',
      ],
    },
    {
      type: 'category',
      label: 'Nas',
      link: {
        type: 'generated-index',
      },
      items: [
        'Notes/Nas/zerotier',
        'Notes/Nas/tunproblem',
        'Notes/Nas/transmission',
      ],
    },
    {
      type: 'category',
      label: 'MacOS',
      link: {
        type: 'generated-index',
      },
      items: [
        'Notes/MacOS/sources',
        'Notes/MacOS/homebrew',
      ],
    },
  ],

  Game: [
    'Game/intro',
    'Game/pokemonSS',
    'Game/Dyson-Sphere-Program',
    {
      type: 'category',
      label: '艾尔登法环',
      link: {
        type: 'doc',
        id: 'Game/Elden-Ring/introduce',
      },
      items: [
        {
          type: 'category',
          label: '武器',
          link: {
            type: 'generated-index',
          },
          items: [
            'Game/Elden-Ring/weapons/weapons',
          ],
        },
        {
          type: 'category',
          label: '护符',
          link: {
            type: 'generated-index',
          },
          items: [
            'Game/Elden-Ring/amulet/amulet',
          ],
        },
        {
          type: 'category',
          label: '防具',
          link: {
            type: 'generated-index',
          },
          items: [
            'Game/Elden-Ring/armor/armor',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
