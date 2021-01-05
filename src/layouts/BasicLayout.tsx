import React, { useEffect, useState } from 'react';
import { Button, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import ProLayout, { DefaultFooter, MenuDataItem, PageContainer, ProSettings } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import { history } from 'umi';

export default (props: any) => {
    const [setting,setSetting]=useState<Partial<ProSettings>|undefined>(undefined);
    const [pathname,setPathname]=useState('/welcome');
    const logo='https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ';
    return(
        <ProLayout 
            {...defaultProps} 
            location={{pathname}}
            style={{height:'100vh'}}
            fixSiderbar
            onMenuHeaderClick={(e)=>console.log(e)}
            menuItemRender={(item,dom)=><a onClick={()=>{console.log(item.path);setPathname(item.path||'/welcome');history.push(item.path?item.path.toString():'/')}}>{dom}</a>} 
            rightContentRender={()=><div><Avatar shape='square' size='small' icon={<UserOutlined/>} /></div>}
            title='Remax' 
            logo={logo} 
            footerRender={()=><DefaultFooter links={[]} copyright='BLANC' />}
        >
            <PageContainer content='欢迎使用'>{props.children}</PageContainer>
        </ProLayout>
    );
};