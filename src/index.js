import React, { useEffect, useState } from 'react';
import { OrientationType } from 'react-native-orientation-locker';
import { Dimensions, Easing } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { BigContainer, Container, Text, LockButton, LockButtonText } from './styles';
import { EditModal } from './modal';
import TextTicker from 'react-native-text-ticker';

const DEFAULT_CONFIG = {
  text: 'TEXTão BAse',
  textStyle: {
    fontSize: 120,
    backgroundColor: 'transparent',
    color: '#dd0011',
  },
  speed: 3000,
  backgroundProps: {
    background: '#333',
  },
};

const Outdoor = () => {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  const [modalVisible, setModalVisible] = useState(false);
  // const [screen, setScreen] = useState([
  //   Dimensions.get('window').width,
  //   Dimensions.get('window').height,
  // ]);
  const screen = [Dimensions.get('window').width, Dimensions.get('window').height];

  // Orientation.addOrientationListener((o: OrientationType) => {
  //   if (o === 'PORTRAIT' || o === 'PORTRAIT-UPSIDEDOWN') setWidth(Dimensions.get('window').width);
  //   else setWidth(Dimensions.get('window').width);
  //   setWidth();
  // });

  // useEffect(() => {
  //   if (modalVisible) Orientation.lockToPortrait();
  //   else Orientation.lockToLandscape();
  // }, [modalVisible]);

  return (
    <BigContainer {...config.backgroundProps}>
      <Container
        width={screen[1]}
        height={screen[0]}
        style={{
          transform: [
            { rotate: '90deg' },
            { translateY: screen[0] / 3 - 1 },
            { translateX: screen[0] / 3 - 1 },
          ],
        }}>
        <EditModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          config={config}
          setConfig={setConfig}
        />
        <TextTicker
          duration={config.speed}
          bounce={false}
          scroll={false}
          easing={Easing.linear}
          repeatSpacer={screen[1] * 0.5}
          style={{
            width: screen[1],
            ...config.textStyle,
          }}>
          {config.text}
        </TextTicker>
        <Text>
          {screen[0].toFixed(0)} - {screen[1].toFixed(0)}
        </Text>
        <LockButton
          onPress={() => {
            setModalVisible(true);
          }}>
          <LockButtonText>{modalVisible ? '🔓' : '🔒'}</LockButtonText>
        </LockButton>
      </Container>
    </BigContainer>
  );
};

export default Outdoor;
