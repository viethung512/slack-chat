import React from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Button, Typography, Input } from 'antd';
import {
  PuzzlePieceIcon,
  UserIcon,
  MailIcon,
  LockIcon,
  RepeatIcon,
} from '../../../app/layout/common/Icons';
import { register } from '../auth.actions';

const { Title, Text } = Typography;

function RegisterForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const { loading, error } = useSelector(state => state.async);

  const handleSubmit = values => {
    const { email, password, username, confirmPassword } = values;
    const userCredentials = { username, email, password, confirmPassword };
    dispatch(register(userCredentials, history));
  };

  const validateConfirmPassword = (rule, value) => {
    const currentPassword = form.getFieldValue('password');

    if (value !== currentPassword) {
      return Promise.reject('Password does not match');
    }

    return Promise.resolve();
  };
  return (
    <div className='register'>
      <Card
        title={
          <Title className='register__form-title' level={2}>
            <PuzzlePieceIcon className='register__form-title-icon' />
            <span>Register for DevChat</span>
          </Title>
        }
        className='register__form'
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
            name='username'
            rules={[{ required: true, message: 'Username is required' }]}
          >
            <Input placeholder='Username' prefix={<UserIcon />} />
          </Form.Item>
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
            rules={[
              { required: true, message: 'Password is required' },
              { min: 6, message: 'Password must at least 6 character' },
            ]}
          >
            <Input.Password placeholder='Password' prefix={<LockIcon />} />
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            rules={[{ validator: validateConfirmPassword }]}
            style={error ? { marginBottom: 4 } : null}
          >
            <Input.Password
              placeholder='Confirm Password'
              prefix={<RepeatIcon />}
            />
          </Form.Item>
          {error && (
            <Form.Item style={{ marginBottom: 4, textAlign: 'center' }}>
              <Text type='danger'>{error.message}</Text>
            </Form.Item>
          )}
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='register__form-submit'
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Text className='register__form-info'>
              Already a user? <Link to='/login'>Login</Link>
            </Text>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default RegisterForm;
