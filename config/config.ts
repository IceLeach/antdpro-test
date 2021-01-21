import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // plugins: [
  //   ['umi-plugin-antd-theme',themeConfig],
  // ],
  // favicon: 'favicon.ico',
  hash: true,
  title: false,
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  targets: {
    ie: 11,
  },
  antd: {
    dark: false,
  },
  theme: {
    // 'primary-color': '#1DA57A',
    // 'modal-header-padding-vertical':'0',
    // 'modal-header-padding-horizontal':'0',
  },
  routes: routes,
  //define: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
});
