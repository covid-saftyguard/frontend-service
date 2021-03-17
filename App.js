import 'react-native-gesture-handler';
// import firebase from 'firebase';
// import { firebaseConfig } from './firebaseConfig';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import LandingStack from './src/routes/LandingStack';
import store from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <LandingStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
