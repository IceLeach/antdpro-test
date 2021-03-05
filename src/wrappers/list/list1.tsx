import React from 'react';
import { Redirect } from 'umi';
export default (props: { children: React.ReactNode }) => {
  // let { isLogin } = useAuth();
  const isLogin = false;
  if (isLogin) {
    console.log('T');
    return <>{props.children}</>;
  } else {
    console.log('F');
    return <Redirect to="/base" />;
  }
};
