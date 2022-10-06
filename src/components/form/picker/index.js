import React, { FC, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker as NativePicker } from '@react-native-picker/picker';

export const Picker = ({ defaultValue, options, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  const onValueChange = value => {
    setValue(value);
    props.onValueChange?.(value);
  };

  return (
    <View>
      <NativePicker selectedValue={value} onValueChange={onValueChange}>
        {options.map(o => (
          <NativePicker.Item label={o.label} value={o.value} />
        ))}
      </NativePicker>
    </View>
  );
};
