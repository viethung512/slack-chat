import React, { useState, useEffect } from 'react';
import { Menu, Typography, Dropdown, Button, Avatar } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const { Text } = Typography;

function UserPanel({ signOut, currentUser }) {
  const [user, setUser] = useState({
    displayName: 'User',
    avatarUrl: '',
  });
  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const menu = (
    <Menu mode='vertical'>
      <Menu.Item key='username'>
        <Text disabled>
          Sign in as <strong>{user.displayName}</strong>
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
      <Button
        type='link'
        style={{ width: 'auto' }}
        className='side-panel-item'
        icon={
          <Avatar
            src={user.avatarUrl}
            alt={user.displayName}
            style={{ marginRight: 8 }}
          />
        }
      >
        {user.displayName}
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
}

export default UserPanel;
