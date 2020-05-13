import React from 'react';
import { Menu, Typography, Dropdown, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const { Text } = Typography;

function UserPanel({ signOut, user }) {
  const menu = (
    <Menu mode='vertical'>
      <Menu.Item key='username'>
        <Text disabled>
          Sign in as <strong>user</strong>
        </Text>
      </Menu.Item>
      <Menu.Item key='avatar'>
        <Text>Change avatar</Text>
      </Menu.Item>
      <Menu.Item key='signOut' onClick={signOut}>
        <Text>Sign Out</Text>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['click', 'hover']}>
      <Button type='link' style={{ color: '#fff' }}>
        User
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
}

export default UserPanel;
