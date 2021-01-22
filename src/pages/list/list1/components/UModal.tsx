import React, { useEffect, useRef } from 'react';
import { Modal, Form, Input, Radio } from 'antd';
import { useState } from 'react';
import { userTypes } from '../index';
import { UserPost } from '../../../../services/admin';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import './UModal.less';
import { useSelector } from 'umi';

interface UModalProps {
  close: () => void;
  record?: userTypes;
}
// let siderWidth=48;

// const setSider=(width: number)=>{
//   console.log('sw',width);
//   siderWidth=width;
// }

const UModal: React.FC<UModalProps> = (props) => {
  const { close, record } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dRef: any = useRef();
  const siderWidth = useSelector((state: any) => state.theme.siderWidth);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [disabled, setDisabled] = useState(true);

  let res;
  const onStart = (event: DraggableEvent, uiData: DraggableData) => {
    // console.log('uiData',uiData);
    // console.log('bounds',bounds);
    console.log('sider', siderWidth);
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = dRef?.current?.getBoundingClientRect();
    // console.log('target',targetRect);
    setBounds({
      left: -targetRect?.left + uiData?.x + siderWidth,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      nickName: record?.nickName,
      state: record?.state,
    });
  }, []);

  // useEffect(() => {
  //   console.log(siderWidth)
  // }, [siderWidth])

  return (
    <Modal
      title={
        <div
          style={{
            // cursor: 'move',
            userSelect: 'none',
            padding: '16px 0',
          }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          详细
        </div>
      }
      // className={styles.antModel}
      visible
      confirmLoading={loading}
      okText="提交"
      cancelText="取消"
      onOk={() => {
        form.validateFields().then(async () => {
          setLoading(true);
          const val = form.getFieldsValue(true);
          val.id = record?.id;
          console.log(val);
          res = await UserPost(val);
          setLoading(false);
          console.log(res);
          setTimeout(() => {
            close();
          }, 500);
        });
      }}
      onCancel={() => close()}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={dRef}>{modal}</div>
        </Draggable>
      )}
    >
      <Form form={form} style={{ paddingTop: '25px' }}>
        <Form.Item label="昵称" name="nickName">
          <Input />
        </Form.Item>
        <Form.Item label="状态" name="state">
          <Radio.Group>
            <Radio value="Activated">Activated</Radio>
            <Radio value="Inactivated">Inactivated</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

// export{ setSider };
export default UModal;
