import React from 'react';
import { Provider } from 'react-redux';
import LandingStack from './src/routes/LandingStack';
import Home from './src/screens/Home';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
      {/* <LandingStack /> */}
    </Provider>
  );
}
