import { StatusBar } from "expo-status-bar";
import React, { Fragment, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import Profile from "./src/Components/Profile";
import Survey from "./src/Components/Survey";
import VaccineMap from "./src/Components/VaccineMap";
// import MapView from "react-native-maps";
import PermissionsAndroid from "react-native";
// import RNLocation from "react-native-location";

// RNLocation.configure({
//   distanceFilter: null,
// });

export default function App() {
  // const permissionHandle = async () => {
  //   console.log("here");

  //   let permission = await RNLocation.checkPermission({
  //     ios: "whenInUse",
  //     android: {
  //       detail: "coarse",
  //       rationale: {
  //         title: "We need to access your location",
  //         message: "We use your location to show where you are on the map",
  //         buttonPositive: "OK",
  //         buttonNegative: "Cancel",
  //       },
  //     },
  //   });

  //   console.log("here2");
  //   console.log(permission);
  // };

  return (
    <VaccineMap />
    // <View style={styles.container}>
    //   <Text> React Native Geolocation</Text>
    //   <View
    //     style={{ marginTop: 10, padding: 10, borderRadius: 10, width: "40%" }}
    //   >
    //     <Button title="Get Location" onPress={permissionHandle} />
    //   </View>
    //   <Text>Latitude: </Text>
    //   <Text>Longitude: </Text>
    //   <View
    //     style={{ marginTop: 10, padding: 10, borderRadius: 10, width: "40%" }}
    //   >
    //     <Button title="Send Location" />
    //   </View>
    // </View>
  );
  // <VaccineMap />;
  // return <Survey />;
  // <MapView style={styles.map} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
