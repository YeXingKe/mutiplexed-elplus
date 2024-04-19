import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MutiplexedElPlus',
  base: '/mutiplexed-elplus/',
  description: '高扩展性的组件库',
  lastUpdated: true,
  markdown: {
    // theme: 'material-theme-palenight',
    // lineNumbers: true,

    anchor: {
      slugify(str) {
        return encodeURIComponent(str);
      },
    },
  },
  themeConfig: {
    siteTitle: 'MutiplexedElPlus',
    logo: '/vue3.png',
    lastUpdatedText: '上次更新时间',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/intro/' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          {
            text: '介绍',
            items: [
              { text: '封装组件库介绍', link: '/intro/' },
              { text: '如何搭建组件文档', link: '/intro/build' },
              { text: '如何规范组件代码', link: '/intro/specs' },
            ],
          },
          {
            text: '指令封装',
            // collapsed:true,
            items: [
              {
                text: '  水印指令',
                link: '/directives/water-mask',
              },
              {
                text: '  复制指令',
                link: '/directives/copy',
              },
              {
                text: '  拖拽指令',
                link: '/directives/copy',
              },
              {
                text: '  长按指令',
                link: '/directives/copy',
              },
            ],
          },
          {
            text: '验证码封装',
            // collapsed:true,
            items: [
              {
                text: '字母数字混合验证码',
                link: '/components/alphanumeric'
              },
              {
                text: '算术验证码',
                link: '/components/arithmetic'
              },
              {
                text: '滑块验证码',
                link: '/components/slider'
              },
              {
                text: '图片旋转验证码',
                link: '/components/rotate'
              },
              {
                text: '拼图验证码',
                link: '/components/picture'
              },
              {
                text: '文字顺序验证码',
                link: '/components/characters'
              },
            ],
          },
          {
            text: '组件封装',
            // collapsed:true,
            items: [
              {
                text: '表格组件',
                link: '/components/table',
              },
              {
                text: '表单组件',
                link: '/components/form',
              },
              {
                text: '附件组件',
                link: '/components/attachment',
              },
              {
                text: '日历组件',
                link: '/components/calendar/',
              },
              {
                text: '弹窗组件',
                link: '/components/modal/',
              },
              {
                text: '导入组件',
                link: '/components/import/',
              },
              {
                text: '日志组件',
                link: '/components/import/',
              },
              {
                text: '角色组件',
                link: '/components/import/',
              },
              {
                text: '权限组件',
                link: '/components/import/',
              },
              {
                text: '字典组件',
                link: '/components/import/',
              },
            ],
          },
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      // { icon:{svg:''}, link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/wushengzhu/mutiplexed-elplus?tab=MIT-1-ov-file">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/wushengzhu">wusheng zhu</a>',
    },
    algolia: {
      appId: '...',
      apiKey: '...',
      indexName: '...',
      locales: {
        zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    },
  },
});
