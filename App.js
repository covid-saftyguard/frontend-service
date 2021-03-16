import React from "react";
import { Provider } from "react-redux";
import LandingStack from "./src/routes/LandingStack";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <LandingStack />
    </Provider>
  );
}
