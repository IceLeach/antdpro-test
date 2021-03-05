import React, { useEffect } from 'react';
import BasicLayout from './BasicLayout';
import defaultProps from './_defaultProps';
import {
  SmileOutlined,
  TabletOutlined,
  CrownOutlined,
} from '@ant-design/icons';
import { useSelector } from 'umi';

const IconMap = {
  smile: <SmileOutlined />,
  tablet: <TabletOutlined />,
  crown: <CrownOutlined />,
};
const dif = {
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
const BLayout = (props: any) => {
  const type = useSelector((state: any) => state.theme.type);
  // useEffect(() => {
  //   console.log('type', type);
  // })
  if (type === 'R') {
    // console.log('type', type);
    return <BasicLayout router={defaultProps}>{props.children}</BasicLayout>;
  } else {
    // console.log('type', type);
    return <BasicLayout router={dif}>{props.children}</BasicLayout>;
  }
};

export default BLayout;
