import React from 'react';
import {
  SmileOutlined,
  TabletOutlined,
  CrownOutlined,
} from '@ant-design/icons';

const IconMap = {
  smile: <SmileOutlined />,
  tablet: <TabletOutlined />,
  crown: <CrownOutlined />,
};
export default {
  route: {
    path: '/',
    name: 'Blanc',
    routes: [
      {
        path: '/',
        name: '欢迎',
        icon: IconMap.smile,
      },
      {
        path: '/management',
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
            path: '/management/page3',
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
            path: '/list/list1',
            name: 'list 1',
            icon: <CrownOutlined />,
          },
          {
            path: '/list/list2',
            name: 'list 2',
            icon: <CrownOutlined />,
          },
          {
            path: '/list/list3',
            name: 'list 3',
            icon: <CrownOutlined />,
          },
        ],
      },
    ],
  },
  location: {
    pathname: '',
  },
};

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
