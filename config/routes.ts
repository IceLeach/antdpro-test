export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    // component: '../layouts/TLayout',
    routes: [
      {
        path: '/management',
        routes: [
          { path: '/management', redirect: '/management/page1' },
          { path: '/management/page1', component: './management/page1' },
          { path: '/management/page2', component: './management/page2' },
          { path: '/management/page3', component: './management/page3' },
        ],
      },
      {
        path: '/list',
        routes: [
          { path: '/list', redirect: '/list/list1' },
          { path: '/list/list1', component: './list/list1' },
          { path: '/list/list2', component: './list/list2' },
          { path: '/list/list3', component: './list/list3' },
        ],
      },
      {
        path: '/welcome',
        routes: [
          { path: '/welcome', redirect: '/welcome/square' },
          {
            path: '/welcome/hello',
            title: 'Welcome',
            component: './welcome/hello',
          },
          {
            path: '/welcome/square',
            title: 'Welcome',
            component: './welcome/square',
          },
        ],
      },
      {
        path: '/',
        // component: '../layouts/BasicLayout',
        routes: [{ path: '/', component: './welcome/hello' }],
      },
    ],
  },
];
