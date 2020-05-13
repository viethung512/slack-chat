import React, { useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';
import UserPanel from './UserPanel';
import HeaderPanel from './HeaderPanel';
import { signOut } from '../auth/auth.actions';
import Channels from './ChannelsPanel';
import { openModal } from '../modal/modal.actions';

const { Sider } = Layout;

function SidePanel(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { current } = useSelector(state => state.user);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => setCollapsed(collapsed);
  const handleSignOut = () => {
    dispatch(signOut());
    history.push('/login');
  };
  const addChannel = () => dispatch(openModal('ChannelModal'));

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className='side-panel'
      width={250}
    >
      <HeaderPanel collapsed={collapsed} />
      <UserPanel signOut={handleSignOut} currentUser={current} />
      <Channels addChannel={addChannel} />
    </Sider>
  );
}

export default SidePanel;
