import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Vaccines() {
  return (
    <>
      <View style={styles.vaccineBackground}>
        <Text style={{ ...styles.vaccineName }}>Pfizer Vaccine</Text>
      </View>
      <View style={styles.vaccineBackground}>
        <Text style={{ ...styles.vaccineName }}>Moderna Vaccine</Text>
      </View>
      <View style={styles.vaccineBackground}>
        <Text style={{ ...styles.vaccineName }}>Johnson & Johnson Vaccine</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  vaccineName: {
    fontSize: 20,
    fontWeight: "600",
  },
  vaccineBackground: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    borderRadius: 20,
    marginBottom: 15,
  },
});
