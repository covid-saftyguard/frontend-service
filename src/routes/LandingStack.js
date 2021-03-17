import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import { firebaseConfig } from '../../firebaseConfig';
import firebase from 'firebase';
const Stack = createStackNavigator();

firebase.initializeApp(firebaseConfig);

export default function LandingStack() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
