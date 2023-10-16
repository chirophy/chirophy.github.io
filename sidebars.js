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
      //collapsed: false,
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
      label: 'Skills',
      link: {
        type: 'generated-index',
      },
      items: [
        'Notes/Skills/github',
        'Notes/Skills/git',
        'Notes/Skills/moon',
        'Notes/Skills/ax86u',
        'Notes/Skills/run',
        'Notes/Skills/wiz',
        'Notes/Skills/onemark',
        'Notes/Skills/giscus',
        'Notes/Skills/operator',
        'Notes/Skills/r86s',
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
        'Notes/Linux/docker',
        'Notes/Linux/rsshub',
        'Notes/Linux/samba',
        'Notes/Linux/debian-pi-aarch64',
        'Notes/Linux/nodejs',
        'Notes/Linux/Lighthouse',
        'Notes/Linux/硬盘对拷',
        'Notes/Linux/dd命令',
        'Notes/Linux/debian',
      ],
    },
    {
      type: 'category',
      label: 'PersonNas',
      link: {
        type: 'doc',
        id: 'Notes/PersonNas/intro',
      },
      items: [
        'Notes/PersonNas/hardware',
        'Notes/PersonNas/software',
        'Notes/PersonNas/others',
      ],
    },
    {
      type: 'category',
      label: 'Nas',
      link: {
        type: 'generated-index',
      },
      items: [
        'Notes/Nas/other-library',
        'Notes/Nas/zerotier',
        'Notes/Nas/transmission',
        'Notes/Nas/qbittorrent',
        'Notes/Nas/tunproblem',
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
        'Notes/MacOS/iTunes'
      ],
    },
    {
      type: 'category',
      label: 'More',
      link: {
        type: 'generated-index',
      },
      items: [
        'Notes/something/vs2013',
        'Notes/something/AIDA64',
        'Notes/something/emoji',
        'Notes/something/NW-ZX507',
        'Notes/something/websitemodel',
        'Notes/something/常用网站',
        'Notes/something/string',
        'Notes/something/MFC-problem',
      ],
    },
  ],

  Game: [
    'Game/intro',
    'Game/pokemonSS',
    'Game/Dyson-Sphere-Program',
    'Game/csgo',
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
    'Game/lab',
  ],
};

module.exports = sidebars;
