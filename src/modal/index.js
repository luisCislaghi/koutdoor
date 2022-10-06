import React from 'react';
import { Form } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/button';
import { Slider } from '~/components/form/slider';
import { Picker } from '~/components/form/picker';
import { Text as TextInput } from '~/components/form/text';
import { Container, Modal, SaveButton, SaveButtonText, Title, Text } from './styles';
import { toConfig, toForm } from './mapper';

export const EditModal = ({
  modalVisible,
  setModalVisible,

  config,
  setConfig,
}) => {
  function closeModal() {
    setModalVisible(e => !e);
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: toForm(config),
  });

  const onSubmit = data => {
    console.log(data);
    setConfig(toConfig(data));
    closeModal();
  };

  return (
    <Modal
      animationType="fade"
      statusBarTranslucent
      des
      visible={modalVisible}
      onRequestClose={() => {
        closeModal();
      }}>
      <Container>
        <Title>USAR UNFORM PARA O FORM</Title>
        <Title>Customize</Title>

        <Text>Texto</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="text"
        />
        {errors.text && <Text>This is required.</Text>}

        <Text>Tamanho do texto</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Picker
              options={[
                { label: '24', value: 24, key: '24' },
                { label: '36', value: 36, key: '36' },
                { label: '48', value: 48, key: '48' },
                { label: '70', value: 70, key: '70' },
                { label: '90', value: 90, key: '90' },
                { label: '120', value: 120, key: '120' },
              ]}
              onBlur={onBlur}
              onValueChange={onChange}
              selectedValue={value}
            />
          )}
          name="textSize"
        />

        <Text>Velocidade</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Slider
              step={500}
              minimumValue={500}
              maximumValue={10000}
              onBlur={onBlur}
              onValueChange={onChange}
              value={value}
            />
          )}
          name="speed"
        />

        <Text></Text>
        <Text></Text>
        <Button
          onPress={() => {
            closeModal();
          }}
          text="Cancelar"
        />
        <Text></Text>
        <Button onPress={handleSubmit(onSubmit)} type="primary" text="Salvar" />
      </Container>
    </Modal>
  );
};
