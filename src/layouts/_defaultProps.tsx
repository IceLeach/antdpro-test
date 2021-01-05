import React from 'react';
import { SmileOutlined, TabletOutlined, CrownOutlined } from '@ant-design/icons';

const IconMap={
  smile: <SmileOutlined />,
  tablet: <TabletOutlined />,
  crown: <CrownOutlined />,
};
export default {
  route:{
    path: '/',
    name: 'Blanc',
    routes: [
      {
        path: '/',
        name: '欢迎',
        icon: IconMap.smile,
      },
      {
        path: '/welcome',
        name: '管理页',
        icon: IconMap.crown,
        // access: 'canAdmin',
        // component: './welcome/hello',
        routes: [
          {
            path: '/management/page1',
            name: 'page 1',
            icon: IconMap.crown,
            // component: './welcome/square',
            exact: true,
          },
          {
            path: '/management/page2',
            name: 'page 2',
            icon: IconMap.crown,
            exact: true,
          },
          {
            path: '/admin/page3',
            name: 'page 3',
            icon: IconMap.crown,
            exact: true,
          },
        ],
      },
      {
        path: '/list',
        name: '列表页',
        icon: IconMap.tablet,
        // component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: '一级列表页面',
            icon: <CrownOutlined />,
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                icon: <CrownOutlined />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                icon: <CrownOutlined />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                icon: <CrownOutlined />,
                component: './Welcome',
              },
            ],
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
        ],
      },
    ],
  },
  location: {
    pathname: '',
  },
}
  

// export default [
//   {
//     path: '/',
//     name: 'welcome',
//     children: [
//       {
//         path: '/welcome',
//         name: 'one',
//         children: [
//           {
//             path: '/welcome/welcome',
//             name: 'two',
//             exact: true,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: '/demo',
//     name: 'demo',
//   },
// ];
