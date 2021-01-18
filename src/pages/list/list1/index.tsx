import ProTable, { ProColumns } from '@ant-design/pro-table';
import React from 'react';
import { Button } from 'antd';
import type { PaginationProps } from 'antd/lib/pagination';
import { PageContainer } from '@ant-design/pro-layout';
import { useDispatch } from 'umi';
import request from 'umi-request';

interface userTypes {
  key: number;
  id?: string;
  name?: string | null;
  nickName?: string | null;
  email?: string | null;
  state?: 'Activated' | 'Inactivated';
  lastLoginDateTime?: string | null;
}

const users: userTypes[] = [];
users.push({
  key: 1,
  id: '#001',
  name: 'user01',
  nickName: 'u1',
  state: 'Activated',
});
users.push({
  key: 2,
  id: '#002',
  name: 'user02',
  nickName: 'u2',
  state: 'Inactivated',
});
const columns: ProColumns<userTypes>[] = [
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
const fetchData = async (url: string) => {
  // const res=await fetch(url,{
  //     method:'GET'
  // });
  // return res.json();
  const res = await request(url, {
    method: 'get',
  });
  return res;
};
const UserTable = () => {
  // const dispatch=useDispatch();
  // const fetchData=async (data: IDataIndexSource) => {
  //     const res = await dispatch({
  //         type: 'admin/fetchAdminGet',
  //         payload: {
  //             Name: data.name ?? null, // `null` means unchanged
  //             NickName: data.nickName ?? null,
  //             Email: data.email ?? null,
  //             State: (data.state as 'Activated' | 'Inactivated') ?? null,
  //             SkipCount: (data.pageSize ?? 0) * ((data.current ?? 1) - 1),
  //             MaxResultCount: data.pageSize,
  //             Sorting: `${nameof(data, 'id')} desc`,
  //         },
  //     });
  //     // console.log('res',res);
  //     return {
  //         data: res?.items ?? [],
  //         total: res?.totalCount ?? 0,
  //         success: true,
  //     };
  // };

  return (
    // <PageContainer>
    <>
      <ProTable
        columns={columns}
        request={(_) => Promise.resolve({ data: users, success: true })}
        // request={fetchData}
      />
      <Button
        onClick={async () => {
          const res = await fetchData(
            'http://jsonplaceholder.typicode.com/posts/1',
          );
          console.log(res);
        }}
      >
        Click
      </Button>
    </>
    // </PageContainer>
  );
};

export default UserTable;
