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
  docs: [
    'index',
    'security',
    'networks',
    'examples',
    'support',
    {
      type: 'category',
      label: 'Quickstarts',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Quickstarts',
        keywords: ['quickstarts']
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'quickstarts',
        },
      ]
    },
    {
      type: 'category',
      label: 'Auth',
      link: {type: 'doc', id: 'auth'},
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'auth',
        },
      ]
    },
    {
      type: 'category',
      label: 'Wallet Kit',
      link: {type: 'doc', id: 'walletkit'},
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'walletkit',
        },
      ]
    },
    {
      type: 'category',
      label: 'API References',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'API References',
        keywords: ['apis']
      },
      items: [
        {
          type: 'link',
          href: 'pathname:///api/docs/',
          label: 'Niomon API (REST)',
        },
        {
          type: 'link',
          href: 'pathname:///sdk/walletkit',
          label: 'WalletKit for JS',
        },
        {
          type: 'autogenerated',
          dirName: 'apis',
        },
      ]
    }
  ]
};

module.exports = sidebars;
