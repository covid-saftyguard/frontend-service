import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import SafetyTips from "../Components/SafetyTips";
import Symptoms from "../Components/Symptoms";
import Vaccines from "../Components/Vaccines";
import firebase from "firebase";

function* yLabel() {
  yield* ["10M", "20M", "30M", "50M", "90M"];
}

export default function Home({ navigation }) {
  const [api, setApi] = useState([]);

  const yLabelIterator = yLabel();

  const logOut = async () => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          navigation.replace("Landing");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/states?sort=&yesterday=")
      .then((r) => r.json())
      .then((data) => {
        console.log("API DATA:", data);
        setApi(data);
      });
  }, []);

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => logOut()}>
        <Text style={{ textAlign: "center" }}>Logout</Text>
      </TouchableOpacity>
      <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
        <View style={styles.container}>
          <Text style={styles.h3}>Cases</Text>
          {api.length > 0 ? (
            <Text style={styles.h1}>{api[0]["cases"]}</Text>
          ) : (
            <ActivityIndicator />
          )}
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
          marginBottom: 40,
          backgroundColor: "#F8F8F8",
          height: 300,
          width: 400,
        }}
      >
        <Text style={{ marginTop: 60 }}>COVID-19 Cases ( 7 Months )</Text>
        <LineChart
          // using dummy data for demo purposes
          data={{
            labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
            datasets: [
              {
                data: [
                  90000000,
                  80000000,
                  79000000,
                  80000000,
                  70000000,
                  80000000,
                  60000000,
                ],
              },
            ],
          }}
          width={400}
          height={300}
          formatYLabel={() => yLabelIterator.next().value}
          // segments={4}
          chartConfig={{
            backgroundColor: "#F8F8F8",
            backgroundGradientFrom: "#F8F8F8",
            backgroundGradientTo: "#F8F8F8",
            color: () => "black",
            labelColor: () => "black",
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "2",
              stroke: "#FF4B4B",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
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
    marginTop: 40,
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
