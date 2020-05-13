import React from 'react';
import { Form, Input, Button } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

function AddChannelForm({ handleCancel }) {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    console.log(values);
    form.resetFields()
  };

  return (
    <Form form={form} onFinish={handleSubmit} autoComplete='off'>
      <Form.Item
        name='channelName'
        rules={[{ required: true, message: 'Channel Name is required' }]}
      >
        <Input placeholder='Name of Channel' />
      </Form.Item>
      <Form.Item
        name='channelDetails'
        rules={[{ required: true, message: 'Channel Details is required' }]}
      >
        <Input.TextArea rows={2} placeholder='About the Channel' />
      </Form.Item>
      <Form.Item style={{ marginBottom: 0 }}>
        <Button
          danger
          ghost
          icon={<CloseOutlined />}
          onClick={handleCancel}
          key='cancel'
          style={{ float: 'right' }}
        >
          Cancel
        </Button>
        <Button
          type='primary'
          ghost
          icon={<CheckOutlined />}
          key='add'
          htmlType='submit'
          style={{ float: 'right', marginRight: 8 }}
        >
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddChannelForm;
