import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Typography } from 'antd';
import { closeModal } from './modal.actions';
import AddChannelForm from '../channel/AddChannelForm';

const { Title } = Typography;

function ChannelModal(props) {
  const dispatch = useDispatch();

  const handleCancel = () => dispatch(closeModal());

  return (
    <Modal
      visible={true}
      width={350}
      onCancel={handleCancel}
      title={
        <Title level={4} style={{ marginBottom: 0 }}>
          Add a Channel
        </Title>
      }
      footer={null}
    >
      <AddChannelForm handleCancel={handleCancel} />
    </Modal>
  );
}

export default ChannelModal;
