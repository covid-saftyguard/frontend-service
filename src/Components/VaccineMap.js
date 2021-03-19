import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import MapView, { AnimatedRegion, Marker, Callout } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import vaccine_marker from "./assets/vaccine_marker.png";
import Unorderedlist from "react-native-unordered-list";
import armInjection from "../../assets/arm-injection.png";

function VaccineMap() {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    error: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => setRegion({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
    );
    fetchVaccineLocations();
  }, []);

  const fetchVaccineLocations = async () => {
    // const token = await AsyncStorage.getItem("token");
    const token =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRlMDBlOGZlNWYyYzg4Y2YwYzcwNDRmMzA3ZjdlNzM5Nzg4ZTRmMWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY292aWQtc2FmZWd1YXJkLTAiLCJhdWQiOiJjb3ZpZC1zYWZlZ3VhcmQtMCIsImF1dGhfdGltZSI6MTYxNjE2NDI1MiwidXNlcl9pZCI6Ik1ib1BjTnVrWjRNRDk5VXhaT3VmcXc2Qzc3ejEiLCJzdWIiOiJNYm9QY051a1o0TUQ5OVV4Wk91ZnF3NkM3N3oxIiwiaWF0IjoxNjE2MTY0MjUyLCJleHAiOjE2MTYxNjc4NTIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluQGFkbWluLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QMDEjdNPsMj_6EZEBlrOwbmrm99r8-dyVE3JtJAqKKok0TrMkYZeSsgP2_w7CvjD_DEbios7vGj9ucMRxkOaxLd9vr3arlkQ3nTaHXQborypJgEw_I4rFeJUnAVaqY_jBshCr_wzmEddwhXkvvaqH_I0ev6lP9imFTKcq8myYBJoqARGzqNbgGykwPpb_lJ8HrjKyQoX9_tVNNQ27QJZA7snu8s4n1kFrgYQw86G92M41BtC26Y435C_5BwguZahRqi9Rkl0ZHX5n-REvSrKv35K1hzWin9XqruIrCL-ZCiUfEgey56qv2NcDgQglYgOnPxdVRu65E3uJvMEs4ANfw";
    console.log("this is the token", token);
    fetch(
      `http://ec2-18-216-242-223.us-east-2.compute.amazonaws.com/api/vaccine/location?lat=${region.latitude}&lon=${region.longitude}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setLocation(data))
      .catch((error) => {
        console.error(error);
      });
  };

  console.log("this is the data", location);
  // let vaccinePlaces = location.filter((place, index) => {
  //   return location.indexOf(place) === index;
  // });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{ ...styles.title, marginTop: -80 }}>Map</Text>
        {location ? (
          <MapView
            style={styles.map}
            region={{
              latitude: region.latitude,
              longitude: region.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            // onRegionChangeComplete={(region) => setRegion(region)}
          >
            <Marker
              style={styles.home}
              coordinate={region}
              // image={require("./assets/map_marker.png")}
            />

            {location.map((place) => (
              <Marker
                key={place.id}
                coordinate={{ latitude: place.lat, longitude: place.long }}
                image={require("./assets/map_marker.png")}
              >
                <Callout tooltip>
                  <View>
                    <View style={styles.bubble}>
                      <Text style={styles.name}>{place.name}</Text>
                      <Text style={styles.name}>{place.address1}</Text>
                      <Text style={styles.name}>
                        {place.city}, {place.state} {place.zip}{" "}
                      </Text>
                      <Text style={styles.name}>{place.phone}</Text>
                      <Text style={styles.name}>
                        {" "}
                        vaccines in stock?: {place.in_stock ? "yes" : "no"}
                      </Text>
                    </View>
                    <View style={styles.arrowBorder} />
                    <View style={styles.arrow} />
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
        ) : (
          <ActivityIndicator />
        )}
        <Text style={styles.title}>Side Effects</Text>
        <View style={styles.sideEffectsContainer}>
          {/* <View style={{ flexDirection: "row" }}>
            <Image style={styles.img} source={armInjection} />
          </View> */}
          <View style={styles.sideEffects}>
            {/* <Text> Pain, Redness, Swelling</Text> */}
            <ScrollView nestedScrollEnabled={true}>
              <Text style={styles.sideEffectsText}>
                On the arm after the shot:
              </Text>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Pain</Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Redness</Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Swelling</Text>
              </Unorderedlist>
              {/* style solutions */}
              <Text style={styles.sideEffectsText}>
                To reduce pain and discomfort where you got the shot:
              </Text>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Apply a clean, cool, wet washcloth over the area.</Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Use or exercise your arm.</Text>
              </Unorderedlist>
              <Text style={styles.sideEffectsText}>
                Throughout the rest of your body:
              </Text>
              {/* <Text>Tiredness, Headache, Muscle pain, Chills, Fever, Nausea</Text> */}
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Tiredness</Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Headache</Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Muscle pain</Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Chills</Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Fever</Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Nausea</Text>
              </Unorderedlist>
              <Text style={styles.sideEffectsText}>
                To reduce discomfort from fever:
              </Text>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Drink plenty of fluids.</Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>Dress lightly.</Text>
              </Unorderedlist>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    // height: "20%",
    // width: "80%",
    // margin: 20,
    // alignSelf: "center",
    // padding: 20,
    // borderWidth: 5,
    // borderRadius: 5,
    // borderColor: "black",
    // backgroundColor: "lightblue",
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
    // marginBottom: -15
  },
  name: {
    fontSize: 10,
    marginBottom: 5,
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  home: {
    width: "50%",
    height: "50%",
  },
  marker: {
    padding: 5,
    backgroundColor: "#550bbc",
    borderRadius: 5,
  },
  container: {
    marginTop: "15%",
    marginBottom: -100,
    // display: "flex",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: "10%",
  },
  map: {
    marginTop: 10,
    marginBottom: 30,
    width: 400,
    height: 350,
    borderRadius: 40,
  },
  sideEffectsContainer: {
    marginTop: 30,
    display: "flex",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "50%",
    margin: "3%",
    borderRadius: 40,
    backgroundColor: "#F8F8F8",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    // padding: 10,
    // position: "absolute",
    fontSize: 35,
    fontWeight: "900",
  },
  sideEffects: {
    // width: "90%",
    // height: "30%",
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "column",
  },
  sideEffectsText: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 20,
    fontWeight: "600",
  },
  sideEffectsOL: {
    marginLeft: 30,
    fontSize: 25,
    fontWeight: "500",
  },
  img: {
    marginTop: 25,
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  // dosage: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "flex-start",
  //   borderColor: "orange",
  //   borderWidth: 1,
  //   width: "90%",
  //   height: Dimensions.get("screen").height * 0.3,
  //   top: 1,
  //   borderStyle: "solid",
  //   margin: "3%",
  //   borderRadius: 10,
  // },
});

export default VaccineMap;
