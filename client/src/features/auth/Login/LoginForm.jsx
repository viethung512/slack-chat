import React from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Form, Button, Typography, Input } from 'antd';
import {
  BranchIcon,
  MailIcon,
  LockIcon,
} from '../../../app/layout/common/Icons';
import { signIn } from '../auth.actions';

const { Title, Text } = Typography;

function LoginForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const { loading, error } = useSelector(state => state.async);

  const handleSubmit = values => {
    const { email, password } = values;
    const userCredentials = { email, password };
    dispatch(signIn(userCredentials, history));
  };

  return (
    <div className='login'>
      <Card
        title={
          <Title className='login__form-title' level={2}>
            <BranchIcon className='login__form-title-icon' />
            <span>Login to DevChat</span>
          </Title>
        }
        className='login__form'
        bodyStyle={{ paddingBottom: 0 }}
        bordered
      >
        <Form
          size='middle'
          autoComplete='off'
          onFinish={handleSubmit}
          form={form}
        >
          <Form.Item
            name='email'
            rules={[
              { required: true, message: 'Email is required' },
              { type: 'email', message: 'Email is not valid' },
            ]}
          >
            <Input placeholder='Email Address' prefix={<MailIcon />} />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Password is required' }]}
            style={error ? { marginBottom: 4 } : null}
          >
            <Input.Password placeholder='Password' prefix={<LockIcon />} />
          </Form.Item>

          {error && (
            <Form.Item style={{ marginBottom: 4, textAlign: 'center' }}>
              <Text type='danger'>{error.general.msg}</Text>
            </Form.Item>
          )}
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login__form-submit'
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Text className='login__form-info'>
              Don't have an account? <Link to='/register'>Register</Link>
            </Text>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;
