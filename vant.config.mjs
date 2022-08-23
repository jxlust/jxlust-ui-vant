export default {
  name: 'jxlust-ui-vant',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/jxlust-ui-vant/',
    },
    packageManager: 'pnpm'
  },
  site: {
    title: 'jxlust-ui-vant',
    logo: 'https://xxxxxx/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'my-text',
            title: 'text 文本展示',
          },
        ],
      },
    ],
  },
};
