import ProTable, { ProColumns } from '@ant-design/pro-table';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import type { PaginationProps } from 'antd/lib/pagination';
import { PageContainer } from '@ant-design/pro-layout';
import { useDispatch, useSelector } from 'umi';
// import { connect } from 'dva';
import UModal from './components/UModal';

export interface userTypes {
  key: number;
  id?: string;
  name?: string | null;
  nickName?: string | null;
  email?: string | null;
  state?: 'Activated' | 'Inactivated';
  lastLoginDateTime?: string | null;
}
// const users: userTypes[] = [];
// users.push({
//   key: 1,
//   id: '#001',
//   name: 'user01',
//   nickName: 'u1',
//   state: 'Activated',
// });
// users.push({
//   key: 2,
//   id: '#002',
//   name: 'user02',
//   nickName: 'u2',
//   state: 'Inactivated',
// });

// const namespace='admin'
// function mapStateToProps(state:any) {
//   const ue:any=state[namespace].user;
//   // console.log('m-sta',ue);
//   return {ue};
// }
const UserTable: React.FC = (props) => {
  const dispatch = useDispatch();
  const [showDetailModel, setDetailModel] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<userTypes>();
  const {
    admin: { user },
  } = useSelector((state: any) => state);

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
      render: (_, record) => [
        <a
          key={1}
          onClick={() => {
            // console.log(record);
            setCurrentRecord(record);
            setDetailModel(true);
          }}
        >
          详细
        </a>,
        <a key={2}>标记</a>,
      ],
    },
  ];
  useEffect(() => {
    dispatch({ type: 'admin/fetchUserGet', payload: {} });
  }, []);

  // console.log(user);

  return (
    // <PageContainer>
    <>
      <ProTable
        columns={columns}
        request={() =>
          Promise.resolve({
            data: user,
            success: true,
          })
        }
        // request={fetchData}
      />
      {showDetailModel && (
        <UModal close={() => setDetailModel(false)} record={currentRecord} />
      )}
      {/* {showDetailModel&&<UModal/>} */}
      <Button>Click</Button>
    </>
    // </PageContainer>
  );
};
// export default connect(mapStateToProps)(UserTable);
export default UserTable;
