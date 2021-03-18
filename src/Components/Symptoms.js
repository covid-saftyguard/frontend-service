import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import fever from "../../assets/fever.png";
import drycough from "../../assets/dry-cough.png";
import headache from "../../assets/headache.png";
import musclepain from "../../assets/muscle-pain.png";
import respiratory from "../../assets/respiratory-failure.png";

export default function Symptoms() {
  return (
    <ScrollView horizontal>
      <View style={styles.card}>
        <Image style={styles.img} source={fever} />
        <Text style={styles.header}>High Fever</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={drycough} />
        <Text style={styles.header}>Dry Cough</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={headache} />
        <Text style={styles.header}>Headache</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={musclepain} />
        <Text style={styles.header}>Muscle Pain</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={respiratory} />
        <Text style={styles.header}>Respiratory Failure</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 40,
    backgroundColor: "#F8F8F8",
    width: 300,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  img: {
    marginBottom: 20,
    borderRadius: 100,
  },
  header: {
    color: "#548CD6",
    fontWeight: "800",
    fontSize: 24,
    marginBottom: 10,
  },
});
