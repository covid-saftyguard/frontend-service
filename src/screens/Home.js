import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
        <View style={styles.container}>
          <Text style={styles.h3}>Cases</Text>
          <Text style={styles.h1}>123</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.h3}>Vaccines</Text>
          <Text style={styles.h1}>1719</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#CECECE",
        }}
      />
      <View
        style={{
          ...styles.container,
          marginLeft: 15,
          marginTop: 20,
          backgroundColor: "#73DCE9",
          height: 300,
          width: 400,
        }}
      >
        <Text>This will be a line chart</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1.5,
    marginTop: 120,
    width: 180,
    height: 130,
    borderRadius: 40,
    padding: 20,
    backgroundColor: "#ff9999",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 42,
    fontWeight: "800",
  },
  h3: {
    fontSize: 22,
  },
});
