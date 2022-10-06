import React, { FC, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import NativeSlider from '@react-native-community/slider';

export const Slider = ({ defaultValue, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  const onValueChange = value => {
    setValue(value);
    props.onValueChange?.(value);
  };

  return (
    <View>
      <NativeSlider
        step={1}
        minimumValue={0}
        maximumValue={9}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b9e4c9"
      />
    </View>
  );
};
