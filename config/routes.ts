export default [
  {
    path: '/base',
    component: './welcome/base',
  },
  {
    path: '/',
    // component: '../layouts/BasicLayout',
    // component: '../layouts/TLayout',
    component: '../layouts/BLayout',
    // redirect: '/base',
    routes: [
      {
        path: '/management',
        routes: [
          { path: '/management', exact: true, redirect: '/management/page1' },
          {
            path: '/management/page1',
            exact: true,
            component: './management/page1',
          },
          {
            path: '/management/page2',
            exact: true,
            component: './management/page2',
          },
          {
            path: '/management/page3',
            exact: true,
            component: './management/page3',
          },
          { component: '@/pages/404' },
        ],
      },
      {
        path: '/list',
        routes: [
          { path: '/list', exact: true, redirect: '/list/list1' },
          {
            path: '/list/list1',
            exact: true,
            component: './list/list1',
            wrappers: ['@/wrappers/list/list1'],
          },
          { path: '/list/list2', exact: true, component: './list/list2' },
          { path: '/list/list3', exact: true, component: './list/list3' },
          { component: '@/pages/404' },
        ],
      },
      {
        path: '/welcome',
        routes: [
          { path: '/welcome', exact: true, redirect: '/welcome/square' },
          {
            path: '/welcome/hello',
            exact: true,
            title: 'Welcome',
            component: './welcome/hello',
          },
          {
            path: '/welcome/square',
            exact: true,
            title: 'Welcome',
            component: './welcome/square',
          },
          { component: '@/pages/404' },
        ],
      },
      {
        path: '/',
        exact: true,
        component: './welcome/hello',
        // component: '../layouts/BasicLayout',
        // routes: [{ path: '/', component: './welcome/hello' }],
      },
      { component: '@/pages/404' },
    ],
  },
];
