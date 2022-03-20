import React from 'react';
import { StyledButton, StyledButtonText } from './styles';

export const Button = ({ type, onPress, text, children }) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  );
};
