import React from 'react';
import { useSelector } from 'react-redux';
import ChannelModal from './ChannelModal';

const modalLookup = {
  ChannelModal,
};

function ModalManager(props) {
  const currentModal = useSelector(state => state.modal);
  let render;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    render = <ModalComponent {...modalProps} />;
  }
  return <span>{render}</span>;
}

export default ModalManager;
