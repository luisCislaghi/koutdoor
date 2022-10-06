import React from 'react';
import { Button } from '~/components/button';
import { Slider } from '~/components/form/slider';
import { Picker } from '~/components/form/picker';
import { Text as TextInput } from '~/components/form/text';
import { Container, Modal, SaveButton, SaveButtonText, Title, Text } from './styles';

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
      animationType="fade"
      statusBarTranslucent
      visible={modalVisible}
      onRequestClose={() => {
        closeModal();
      }}>
      <Container>
        <Title>USAR UNFORM PARA O FORM</Title>
        <Title>Customize</Title>
        <Text>Texto</Text>
        <TextInput />
        <Text>Tamanho do texto</Text>
        <Picker
          options={[
            { label: '24', value: '24' },
            { label: '36', value: '36' },
            { label: '48', value: '48' },
            { label: '70', value: '70' },
            { label: '90', value: '90' },
          ]}
        />
        <Text>Velocidade</Text>
        <Slider />
        <Text></Text>
        <Text></Text>
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
