import React, { useEffect, useState } from 'react';
import { Button, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import ProLayout, { DefaultFooter, MenuDataItem, PageContainer, ProSettings } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';

export default () => {
  const [setting,setSetting]=useState<Partial<ProSettings>|undefined>(undefined);
  const [pathname,setPathname]=useState('/welcome');
  // const [menuData,setMenuData]=useState<MenuDataItem[]>([]);
  // const [loading,setLoading]=useState(true);
  // const [index,setIndex]=useState(0);
  // useEffect(()=>{
  //   setMenuData([]);
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setMenuData(customMenuDate);
  //     setLoading(false);
  //   },1000);
  // },[index]);
  // const menuItemRender=(item: any,dom: React.ReactNode)=><div>pre {dom}</div>;
  // const subMenuItemRender=(_: any,dom: React.ReactNode)=><div>pre {dom}</div>;
  const logo='https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ';
  // const menuHeaderRender=(logo: React.ReactNode,title: React.ReactNode)=><div id='customize_menu_header' onClick={()=>{window.open('https://remaxjs.org/')}}>{logo}{title}</div>
  return(
    // <>
    //   <Button onClick={()=>setIndex(index+1)} style={{margin:8}}>重新加载</Button>
    //   <ProLayout style={{height:'100vh',border:'1px solid #ddd'}} menu={{loading}} location={{pathname:'/welcome/p'}} menuDataRender={()=>menuData}>
    //     <PageContainer content='欢迎使用'><div>Hello World</div></PageContainer>
    //   </ProLayout>
    // </>
    // <div style={{height:'100vh'}}>
      <ProLayout 
      {...defaultProps} 
      location={{pathname}}
      style={{height:'100vh'}}
      fixSiderbar
      
      onMenuHeaderClick={(e)=>console.log(e)}
      // breakpoint={false}
      menuItemRender={(item,dom)=><a onClick={()=>setPathname(item.path||'/welcome')}>{dom}</a>} 
      rightContentRender={()=><div><Avatar shape='square' size='small' icon={<UserOutlined/>} /></div>}
      // subMenuItemRender={subMenuItemRender} 
      title='Remax' logo={logo} 
      footerRender={()=><DefaultFooter links={[]} copyright='BLANC' />}
      // menuHeaderRender={menuHeaderRender} 
      
      // location={{pathname:'/welcome/p'}}
      >
        <PageContainer content='欢迎使用'>Hello World</PageContainer>
      </ProLayout>
    // </div>
  );
};
