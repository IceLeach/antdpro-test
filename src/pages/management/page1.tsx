import React, { useRef } from 'react';
import { Input, Button } from 'antd';

function onchange(current: any) {
  current.setState({ value: current.state.value == '1' ? '2' : '1' });
}
export default () => {
  const inputRef: any = useRef();
  const a = { a: 'a1', b: 'b2', c: 3 };
  const value = a.toString();
  return (
    <>
      <Input ref={inputRef} defaultValue="1" />
      <Button onClick={() => onchange(inputRef.current)}>切换</Button>
      {/* {console.log(value)} */}
      {/* <Input defaultValue={value}/> */}
    </>
  );
};
