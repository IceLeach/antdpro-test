import { defineConfig } from 'umi';

export default defineConfig({
  // favicon: 'favicon.ico',
  title: '管理平台业务模版',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { 
      path: '/', 
      component: '../layouts/BasicLayout',
      // component: '../layouts/TLayout',
      routes:[
        {
          path: '/welcome',
          routes: [
            { path: '/welcome', redirect: '/welcome/square' },
            { path: '/welcome/hello',title: 'Welcome', component: './welcome/hello' },
            { path: '/welcome/square',title: 'Welcome', component: './welcome/square' },
          ],
        },
        {
          path: '/management',
          routes: [
            { path: '/management', redirect: '/management/page1' },
            { path: '/management/page1', component:'./management/page1' },
            { path: '/management/page2', component:'./management/page2' },
          ],
        },
        {
          path: '/',
          // component: '../layouts/BasicLayout',
          routes: [
            { path: '/', redirect: '/e' },
            { path: '/e', component: './welcome/hello'},
          ],
        },  
      ],
    },
  ],
});
