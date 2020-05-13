import React, { useState } from 'react';
import './style.css';
import { Layout } from 'antd';
import UserPanel from './UserPanel';
import HeaderPanel from './HeaderPanel';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../auth/auth.actions';

const { Sider } = Layout;

function SidePanel(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.current);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const handleSignOut = () => dispatch(signOut());

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className='side-panel'
      width={250}
    >
      <HeaderPanel collapsed={collapsed} />
      <UserPanel signOut={handleSignOut} user={user} />
    </Sider>
  );
}

export default SidePanel;
