import React, { useEffect } from 'react';
import { Modal, Form, Input, Radio } from 'antd';
import { useState } from 'react';
import { userTypes } from '../index';

interface UModalProps {
  close: () => void;
  record?: userTypes;
}
const UModal: React.FC<UModalProps> = (props) => {
  const { close, record } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      nickName: record?.nickName,
      state: record?.state,
    });
  }, []);
  return (
    <Modal
      visible
      onOk={() => {
        form
          .validateFields()
          .then(() => console.log(form.getFieldsValue(true)));
        close();
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
