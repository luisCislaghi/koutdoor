import React, { FC, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
export const Text = ({ placeholder, ...props }) => {
  return (
    <View>
      <TextInput {...props} placeholder={placeholder} />
    </View>
  );
};
