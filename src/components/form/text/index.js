import React, { FC, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
export const Text = ({ defaultValue, placeholder, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  const onValueChange = value => {
    setValue(value);
    props.onValueChange?.(value);
  };

  return (
    <View>
      <TextInput placeholder={placeholder} onChangeText={onValueChange} value={value} />
    </View>
  );
};
