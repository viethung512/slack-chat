import React, { useState } from 'react';
import { Button } from 'antd';
import { SwapOutlined, PlusOutlined } from '@ant-design/icons';

function Channels({ addChannel }) {
  const [channels] = useState([]);
  return (
    <div className='side-panel-item side-panel__channels'>
      <Button icon={<SwapOutlined />} type='link' style={{ color: '#fff' }}>
        CHANNEL ({channels.length})
      </Button>

      <Button
        icon={<PlusOutlined />}
        shape='circle'
        type='link'
        style={{ marginRight: 15, color: '#fff' }}
        onClick={addChannel}
      />
    </div>
  );
}

export default Channels;
