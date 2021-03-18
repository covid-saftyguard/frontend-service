import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import LandingScreen from "../screens/LandingScreen";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Home from "../screens/Home";
import { firebaseConfig } from "../../firebaseConfig";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firebase from "firebase";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "",
        tabBarIcon: () => (
          <MaterialIcons
            style={{ marginTop: 30, height: 40 }}
            name="home"
            size={40}
          />
        ),
        tabBarColor: "white",
      }}
    />
  </Tab.Navigator>
);

export default function LandingStack() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          // header: () => null,
          title: null,
          headerStyle: { borderColor: "white" },
          cardStyle: { backgroundColor: "#fff" },
        }}
      />
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Signup" component={Signup} options={{}} />
      <Stack.Screen name="Home" component={MainTabNavigator} options={{}} />
    </Stack.Navigator>
  );
}
