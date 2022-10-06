import React, { FC, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import NativeSlider from '@react-native-community/slider';

export const Slider = props => {
  const {
    minimumTrackTintColor = '#1fb28a',
    maximumTrackTintColor = '#d3d3d3',
    thumbTintColor = '#b9e4c9',
  } = { ...props };
  return (
    <View>
      <NativeSlider
        {...props}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        thumbTintColor={thumbTintColor}
      />
    </View>
  );
};
