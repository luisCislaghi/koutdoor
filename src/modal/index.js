import React from 'react';
import { Button } from '~/components/button';
import { Container, Modal, SaveButton, SaveButtonText, Title } from './styles';

export const EditModal = ({
  modalVisible,
  setModalVisible,

  config,
  setConfig,
}) => {
  function closeModal() {
    setModalVisible(e => !e);
  }

  return (
    <Modal
      // transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => {
        console.log('tentei vfehcaraaaaqa');
        closeModal();
      }}>
      <Container>
        <Title>Customize</Title>
        <Button
          onPress={() => {
            closeModal();
          }}
          text="Cancelar"
        />
        <Button
          onPress={() => {
            closeModal();
          }}
          type="primary"
          text="Salvar"
        />
      </Container>
    </Modal>
  );
};
