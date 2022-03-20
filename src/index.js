import React, { useEffect, useState } from 'react';
import { OrientationType } from 'react-native-orientation-locker';
import { Dimensions, Easing } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { Container, Text, LockButton, LockButtonText } from './styles';
import { EditModal } from './modal';
import TextTicker from 'react-native-text-ticker';

const Outdoor = () => {
  const [config, setConfig] = useState({
    text: '❤ 당신을 사랑합니다 ❤',
    textStyle: {
      fontSize: 100,
      backgroundColor: 'white',
      color: '#dd0011',
    },
    backgroundProps: {
      background: '#333',
    },
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [width, setWidth] = useState(Dimensions.get('window').width);

  // Orientation.addOrientationListener((o: OrientationType) => {
  // if (o === 'PORTRAIT' || o === 'PORTRAIT-UPSIDEDOWN') setWidth(Dimensions.get('window').width);
  // else setWidth(Dimensions.get('window').width);
  // setWidth();
  // });

  useEffect(() => {
    if (modalVisible) Orientation.lockToPortrait();
    else Orientation.lockToLandscape();
  }, [modalVisible]);

  return (
    <Container {...config.backgroundProps}>
      <EditModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        config={config}
        setConfig={setConfig}
      />
      <TextTicker
        duration={3000}
        bounce={false}
        scroll={false}
        easing={Easing.linear}
        repeatSpacer={width * 0.5}
        style={{
          width: width,
          ...config.textStyle,
          transform: [{ rotate: '90deg' }],
        }}>
        {config.text}
      </TextTicker>
      <Text>{width}</Text>
      <LockButton
        onPress={() => {
          setModalVisible(true);
        }}>
        <LockButtonText>{modalVisible ? '🔓' : '🔒'}</LockButtonText>
      </LockButton>
    </Container>
  );
};

export default Outdoor;
