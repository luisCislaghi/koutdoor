import React from 'react';
import color from '~/assets/color';
import styled from 'styled-components/native';
import { Modal as RNModal } from 'react-native';

export const Container = styled.View`
  flex: 1;
  /* background-color: ${color['light-gray']}; */
  padding: 20px 40px;
`;

export const Modal = styled(RNModal)`
  /* flex: 1; */
  background-color: #e17486;
`;

export const Title = styled.Text`
  color: ${color.dark};
  text-align: center;
  margin-bottom: 20px;
`;
export const Text = styled.Text`
  color: ${color.dark};
`;
