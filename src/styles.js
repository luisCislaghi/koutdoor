import styled from 'styled-components/native';

export const BigContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  align-content: stretch;
  background-color: ${props => props.background};
`;
export const Container = styled.View`
  position: absolute;
  width: ${props => props.width + 2}px; // +2 just to make sure it's fullscreen
  height: ${props => props.height + 2}px;
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
