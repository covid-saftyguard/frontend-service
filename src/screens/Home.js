import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

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
        <Text>Line chart here once data is received</Text>
      </View>
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
        <Text
          style={{
            marginTop: 10,
            marginBottom: 20,
            fontSize: 22,
            fontWeight: "600",
          }}
        >
          Vaccines Available
        </Text>
        {/* once api data is received, map through to create each view component below */}
        <View
          style={{
            backgroundColor: "#548CD6",
            padding: 20,
            width: "100%",
            borderRadius: 20,
            marginBottom: 10,
          }}
        >
          <Text style={{ ...styles.h3, color: "#fff", fontWeight: "500" }}>
            Pfizer Vaccine
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#548CD6",
            padding: 20,
            width: "100%",
            borderRadius: 20,
            marginBottom: 10,
          }}
        >
          <Text style={{ ...styles.h3, color: "#fff", fontWeight: "500" }}>
            Moderna Vaccine
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#548CD6",
            padding: 20,
            width: "100%",
            borderRadius: 20,
            marginBottom: 10,
          }}
        >
          <Text style={{ ...styles.h3, color: "#fff", fontWeight: "500" }}>
            Johnson & Johnson Vaccine
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 15, marginTop: 25, marginBottom: 15 }}>
        <Text style={{ ...styles.h1, fontSize: 30 }}>Symptoms</Text>
      </View>
      <ScrollView horizontal="true">
        <View
          style={{
            padding: 40,
            backgroundColor: "#F8F8F8",
            width: 300,
            borderRadius: 20,
            marginLeft: 15,
          }}
        >
          <Image />
          <Text
            style={{
              color: "#548CD6",
              fontWeight: "800",
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            High Fever
          </Text>
          <Text>Lorem ipsum lorem ipsum</Text>
        </View>
        <View
          style={{
            padding: 40,
            backgroundColor: "#F8F8F8",
            width: 300,
            borderRadius: 20,
            marginLeft: 15,
          }}
        >
          <Image />
          <Text
            style={{
              color: "#548CD6",
              fontWeight: "800",
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            Dry Cough
          </Text>
          <Text>Lorem ipsum lorem ipsum</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderColor: "black",
    // borderWidth: 1.5,
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
