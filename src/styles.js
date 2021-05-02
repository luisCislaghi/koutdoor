import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import MarqueeText from "react-native-marquee";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.background};
  align-items: center;
  justify-content: center;
`;

export const Text = styled(MarqueeText)`
  width: ${Dimensions.get("window").width}px;
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
`;
