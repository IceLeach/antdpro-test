import React from 'react';
import { SmileOutlined, CrownOutlined, TableOutlined } from '@ant-design/icons';
export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎页',
        icon: <SmileOutlined />,
        // component: './Welcome',
        routes: [
          {
            path: '/welcome/hello',
            name: '介绍',
            icon: <CrownOutlined />,
            component: './welcome/hello',
          },
          {
            path: '/welcome/list',
            name: '列表',
            icon: <TableOutlined />,
            component: './welcome/square',
          }
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
};