import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SafetyTips from "../Components/SafetyTips";
import Symptoms from "../Components/Symptoms";
import Vaccines from "../Components/Vaccines";

export default function Home() {
  return (
    <ScrollView>
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
          marginTop: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#F2F2F2",
        }}
      />
      <View
        style={{
          ...styles.container,
          marginLeft: 15,
          marginTop: 20,
          backgroundColor: "#F8F8F8",
          height: 300,
          width: 400,
        }}
      >
        <Text>Line chart here once data is received</Text>
      </View>
      <View
        style={{
          ...styles.container,
          marginLeft: 15,
          marginTop: 20,
          backgroundColor: "#F8F8F8",
          height: 350,
          width: 400,
        }}
      >
        <Text
          style={{
            marginTop: 40,
            marginBottom: 20,
            fontSize: 30,
            fontWeight: "800",
          }}
        >
          Vaccines Available
        </Text>
        {/* once api data is received, map through to create each view component below */}
        <Vaccines />
      </View>
      <View style={{ marginLeft: 15, marginTop: 25, marginBottom: 15 }}>
        <Text style={{ ...styles.h1, fontSize: 30 }}>Symptoms</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Symptoms />
      </View>
      <View style={{ marginLeft: 15, marginTop: 25, marginBottom: 15 }}>
        <Text style={{ ...styles.h1, fontSize: 30 }}>
          Safety Tips / Prevention
        </Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <SafetyTips />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    width: 180,
    height: 130,
    borderRadius: 40,
    padding: 20,
    backgroundColor: "#FF4B4B",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 42,
    fontWeight: "900",
  },
  h3: {
    fontSize: 22,
  },
});
