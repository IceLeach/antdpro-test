import React, { useEffect, useState } from 'react';
import { Button, Avatar, Switch } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProLayout, {
  DefaultFooter,
  MenuDataItem,
  PageContainer,
  PageHeaderWrapper,
} from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import { history, Link, useDispatch } from 'umi';
import { connect } from 'dva';

function mapStateToProps(state: any) {
  const themeConfig: any = state['theme'];
  // console.log(themeConfig);
  return { themeConfig };
}
const BL = (props: any) => {
  // const setting:any=theme.state;
  const [collDef, setCollDef] = useState(true);
  const [pathname, setPathname] = useState(window.location.pathname ?? '/');
  const [collapsed, setCollapsed] = useState(true);
  const logo =
    'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ';
  const dispatch = useDispatch();
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
  let pageName;
  return (
    <ProLayout
      {...defaultProps}
      // navTheme={'light'}
      breadcrumbRender={(route: any) => [...route]}
      collapsed={collapsed}
      onCollapse={() => {
        collDef ? setCollDef(false) : setCollapsed(!collapsed);
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
