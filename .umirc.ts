import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: 'index',
      path: '/',
      component: '@/pages/index',
      title: 'site.title',
      access: 'canReadIndex',
    },
    // {
    //   name: 'about',
    //   path: '/about',
    //   component: '@/pages/about',
    //   title: 'about.title',
    // },
    {
      name: 'about',
      path: '/about',
      component: '@/layouts/about',
      routes: [
        {
          name: 'about_index',
          path: 'index',
          component: '@/pages/about',
          exact: true,
        },
        {
          name: 'about_welcome',
          path: 'welcome',
          component: '@/pages/welcome',
          exact: true,
        },
      ],
    },
  ],
  antd: {
    dark: false,
    compact: false,
  },
  dva: {
    immer: false,
    hmr: true,
  },
  locale: {
    /** 默认配置 */
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'basic项目后台',
    locale: true,
    layout: 'side',
  },
});
