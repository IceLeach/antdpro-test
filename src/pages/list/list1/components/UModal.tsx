import React, { useEffect } from 'react';
import { Modal, Form, Input, Radio } from 'antd';
import { useState } from 'react';
import { userTypes } from '../index';
import { UserPost } from '../../../../services/admin';

interface UModalProps {
  close: () => void;
  record?: userTypes;
}
const UModal: React.FC<UModalProps> = (props) => {
  const { close, record } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  let res;
  useEffect(() => {
    form.setFieldsValue({
      nickName: record?.nickName,
      state: record?.state,
    });
  }, []);
  return (
    <Modal
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

export default UModal;
