import React from 'react';
import { Typography } from 'antd';
import { CodeIcon } from '../../app/layout/common/Icons';

const { Title, Text } = Typography;

function HeaderPanel({ collapsed }) {
  return (
    <Title level={3} className='side-panel__logo'>
      <CodeIcon className='side-panel__logo-icon' />
      <Text
        className='side-panel__logo-title'
        style={collapsed ? { display: 'none' } : null}
      >
        DevChat
      </Text>
    </Title>
  );
}

export default HeaderPanel;
