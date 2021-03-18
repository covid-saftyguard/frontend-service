import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Home from '../screens/Home';
import { firebaseConfig } from '../../firebaseConfig';
import firebase from 'firebase';

export default function LandingStack() {
  const Stack = createStackNavigator();

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          // header: () => null,
          title: null,
          headerStyle: { borderColor: 'white' },
          cardStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Signup" component={Signup} options={{}} />
      <Stack.Screen name="Home" component={Home} options={{}} />
    </Stack.Navigator>
  );
}
