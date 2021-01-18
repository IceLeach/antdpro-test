import ProTable, { ProColumns } from '@ant-design/pro-table';
import React from 'react';

const columns: ProColumns[] = [
  {
    title: '用户ID',
    // dataIndex: nameof(dataIndexSource, 'id'),
    dataIndex: 'id',
    search: false,
    hideInForm: true,
  },
  {
    title: '用户名',
    dataIndex: 'name',
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
  },
  {
    title: 'Email',
    dataIndex: 'nickName',
  },
  {
    title: '状态',
    dataIndex: 'state',
    hideInForm: true,
    // renderText: (data: StateDto) => data.displayName,
  },
  {
    title: '最后登录时间',
    dataIndex: 'lastLoginDateTime',
    valueType: 'dateTime',
    hideInForm: true,
    search: false,
  },
  {
    title: '操作',
    valueType: 'option',
    render: () => [<a key={1}>详细</a>, <a key={2}>标记</a>],
  },
];
const UserTable = () => {
  return <ProTable columns={columns} />;
};

export default UserTable;
