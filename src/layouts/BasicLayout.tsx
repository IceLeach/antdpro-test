import React, { useEffect, useState } from 'react';
import { Button, Avatar, Switch } from 'antd';
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import ProLayout, {
  DefaultFooter,
  MenuDataItem,
  PageContainer,
  PageHeaderWrapper,
} from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import { history, Link, useDispatch, useSelector } from 'umi';
import { connect } from 'dva';
// import { setSider } from '../pages/list/list1/components/UModal';

function mapStateToProps(state: any) {
  const themeConfig: any = state['theme'];
  // console.log(themeConfig);
  return { themeConfig };
}

let siderWidth = 48;

const BL = (props: any) => {
  // const setting:any=theme.state;
  const [collDef, setCollDef] = useState(true);
  const [pathname, setPathname] = useState(window.location.pathname ?? '/');
  // const [collapsed, setCollapsed] = useState(true);
  // const [n, setN] = useState(0)
  const logo =
    'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ';
  const dispatch = useDispatch();
  const siderWidth = useSelector((state: any) => state.theme.siderWidth);
  useEffect(() => {
    // console.log(props.router);
  });
  function themeChange(state: boolean) {
    // dispatch({
    //     type:'theme/changeTheme',
    //     payload:{state},
    // });
    // const res=Promise.resolve(dispatch({
    //     type:'theme/loadTheme',
    // }))
    // res.then((res)=>console.log(res));
    // ce(1);
  }
  return (
    <ProLayout
      // {...defaultProps}
      {...props.router}
      // collapsedButtonRender={(collapsed)=>{
      //   if(collapsed){
      //     // onClick={()=>{siderWidth=208;setSider(208);}}
      //     // return <MenuUnfoldOutlined  onClick={()=>{dispatch({
      //     //   type: 'theme/setSider',
      //     //   payload: 208
      //     // })}}/>
      //     return <MenuUnfoldOutlined />
      //   }else{
      //     // siderWidth=48;setSider(48);
      //     // return <MenuFoldOutlined onClick={()=>{dispatch({
      //     //   type: 'theme/setSider',
      //     //   payload: 48
      //     // })}}/>
      //     return <MenuFoldOutlined />
      //   }
      // }}
      // navTheme={'light'}
      breadcrumbRender={() => undefined}
      collapsed={siderWidth === 48}
      // collapsed={collapsed}
      // defaultCollapsed={true}
      onCollapse={(bool) => {
        if (collDef) {
          setCollDef(false);
          dispatch({
            type: 'theme/setSider',
            payload: 48,
          });
          return;
        }
        dispatch({
          type: 'theme/setSider',
          payload: bool ? 48 : 208,
        });
      }}
      location={{ pathname }}
      style={{ height: '100vh' }}
      fixSiderbar
      onMenuHeaderClick={(e) => {
        console.log(e);
        setPathname('/');
        history.push('/');
      }}
      menuItemRender={(item: any, dom) => (
        <Link
          to={item.path ?? '/'}
          onClick={() => {
            setPathname(item.path ?? '/');
          }}
        >
          {dom}
        </Link>
      )}
      rightContentRender={() => (
        <>
          <Switch onChange={(e) => themeChange(e)} />
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </>
      )}
      title="Remax"
      logo={logo}
      footerRender={() => <DefaultFooter links={[]} copyright="BLANC" />}
    >
      <PageContainer>{props.children}</PageContainer>
    </ProLayout>
  );
};

export default connect(mapStateToProps)(BL);
