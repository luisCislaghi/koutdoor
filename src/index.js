import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import {Container, Text} from './styles';

const Outdoor = () => {
  const [text, setText] = useState('❤ BTS ❤');
  const [size, setSize] = useState(100);

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <Container background={'#000000'}>
      <Text color={'#ff00ff'} duration={2000} marqueeOnStart loop size={size}>
        {text}
      </Text>
    </Container>
  );
};

export default Outdoor;
