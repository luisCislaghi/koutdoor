import React, { FC, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker as NativePicker } from '@react-native-picker/picker';

export const Picker = ({ options, ...props }) => {
  return (
    <View>
      <NativePicker {...props}>
        {options.map(o => (
          <NativePicker.Item {...o} />
        ))}
      </NativePicker>
    </View>
  );
};
