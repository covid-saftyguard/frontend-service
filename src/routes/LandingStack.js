import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
const Stack = createStackNavigator();

export default function LandingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={LandingScreen} />
    </Stack.Navigator>
  );
}
