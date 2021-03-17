import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import Login from '../Components/Login';
const Stack = createStackNavigator();

export default function LandingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          header: () => null,
          cardStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen name="Login" component={Login} options={{}} />
    </Stack.Navigator>
  );
}
