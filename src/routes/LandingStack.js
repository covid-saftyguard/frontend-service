import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function LandingStack() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 42,
    fontWeight: "800",
  },
});
