import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Vaccines() {
  return (
    <>
      <TouchableOpacity style={styles.vaccineBackground}>
        <Text style={{ ...styles.vaccineName }}>Pfizer Vaccine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.vaccineBackground}>
        <Text style={{ ...styles.vaccineName }}>Moderna Vaccine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.vaccineBackground}>
        <Text style={{ ...styles.vaccineName }}>Johnson & Johnson Vaccine</Text>
      </TouchableOpacity>
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
