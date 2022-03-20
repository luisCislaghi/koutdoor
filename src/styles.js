import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.background};
  align-items: center;
  justify-content: center;
`;

export const LockButton = styled.TouchableHighlight`
  position: absolute;
  left: 40px;
  bottom: 40px;
  z-index: 2138;
  background: white;
  /* border-radius: 50px; */
  padding: 8px;
`;

export const LockButtonText = styled.Text``;

export const Text = styled.Text`
  color: yellow;
`;
