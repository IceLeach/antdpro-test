import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [count, setCount] = useState(0);
  const couterRef: any = useRef();
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(couterRef.current);
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button ref={couterRef} onClick={() => setCount(count + 1)}>
        Click({count})
      </Button>
    </div>
  );
};
