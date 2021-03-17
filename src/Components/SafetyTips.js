import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import mask from "../../assets/mask.png";
import distance from "../../assets/distance.png";
import washhands from "../../assets/wash-hands.png";

export default function SafetyTips() {
  return (
    <View>
      <View style={{ ...styles.card, flexDirection: "row" }}>
        <Image style={styles.img} source={mask} />
        <Text style={{ width: 200 }}>
          <Text style={styles.header}>
            Wear a mask {"\n"}
            {"\n"}
          </Text>
          Wear your mask over your nose and mouth and secure it under your chin.
          {"\n"} {"\n"}Everyone 2 years and older should wear masks in public.
        </Text>
      </View>
      <View style={{ ...styles.card, flexDirection: "row" }}>
        <Image style={styles.img} source={distance} />
        <Text style={{ width: 200 }}>
          <Text style={styles.header}>
            Keep distance{"\n"}
            {"\n"}
          </Text>
          Keeping distance (6ft) from others is especially important for people
          who are at higher risk of getting very sick.
        </Text>
      </View>
      <View style={{ ...styles.card, flexDirection: "row" }}>
        <Image style={styles.img} source={washhands} />
        <Text style={{ width: 200 }}>
          <Text style={styles.header}>
            Wash hands{"\n"}
            {"\n"}
          </Text>
          After blowing your nose, coughing, or sneezing.{"\n"}
          {"\n"}
          After handling your mask.{"\n"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 40,
    backgroundColor: "#F8F8F8",
    width: 400,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
  },
  img: {
    width: 155,
    height: 130,
    marginLeft: -20,
    marginRight: 15,
    marginBottom: 20,
    borderRadius: 30,
  },
  h1: {
    fontSize: 30,
    fontWeight: "700",
  },
  header: {
    fontWeight: "800",
    fontSize: 24,
    marginBottom: 10,
  },
});
