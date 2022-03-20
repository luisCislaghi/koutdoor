import React from 'react';
import { StatusBar } from 'react-native';
import Outdoor from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden backgroundColor="transparent" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Outdoor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
