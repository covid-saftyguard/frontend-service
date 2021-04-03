import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, {
  AnimatedRegion,
  Marker,
  Callout,
  CalloutSubview,
} from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import vaccine_marker from "./assets/vaccine_marker.png";
import Unorderedlist from "react-native-unordered-list";
import armInjection from "../../assets/arm-injection.png";
import { Linking, Alert, Platform } from "react-native";

function VaccineMap() {
  const [location, setLocation] = useState([]);
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
      { enableHighAccuracy: true, timeout: 1000, maximumAge: 2000 }
    );
    const timer = setTimeout(() => {
      fetchVaccineLocations();
    }, 44000);
    return () => clearTimeout(timer);
  }, [location]);

  const fetchVaccineLocations = () => {
    fetch(
      `http://ec2-18-216-242-223.us-east-2.compute.amazonaws.com/api/vaccine/location?lat=${region.latitude}&lon=${region.longitude}`,
      // "http://ec2-18-216-242-223.us-east-2.compute.amazonaws.com/api/vaccine/location?lat=37.785834&lon=-122.406417",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log('map data:', data);
        setLocation(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // console.log('latitude:', region.latitude);
  // console.log('longitude:', region.longitude);

  // let vaccinePlaces = location.filter((place, index) => {
  //   return location.indexOf(place) === index;
  // });

  // const token = await AsyncStorage.getItem("token");
  // const token =
  //   "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRlMDBlOGZlNWYyYzg4Y2YwYzcwNDRmMzA3ZjdlNzM5Nzg4ZTRmMWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY292aWQtc2FmZWd1YXJkLTAiLCJhdWQiOiJjb3ZpZC1zYWZlZ3VhcmQtMCIsImF1dGhfdGltZSI6MTYxNjE2NTUxOCwidXNlcl9pZCI6Ik1ib1BjTnVrWjRNRDk5VXhaT3VmcXc2Qzc3ejEiLCJzdWIiOiJNYm9QY051a1o0TUQ5OVV4Wk91ZnF3NkM3N3oxIiwiaWF0IjoxNjE2MTY1NTE4LCJleHAiOjE2MTYxNjkxMTgsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluQGFkbWluLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oHDmP1-VFxc2LwxdYffuV-tBXT9xy1hFLXQglz_scdAwUSc6rQNbM-haoNetH3E2AcdkfJUKJP50g6XFLTb4ZfUIqlMCRildu-nOHWY9hWiZ-M-Khs-me1-wJTDz1uA6LyBK0HHqpjlZfOChP6CJHwSQ04ch8D1NDWoW40l86yuXaHY5Dn8Du65VqtfX_XFxifKyC1VtLdotiVMlofTjCevtS6xGwDomRHG9Owa1fgplJgq_cyYHiGUE2pqnbn-eZ7OdmesruhROkhBLx3_4HXj0uEmQny9-dUHlTXu08WbyfZeG6E99AAtWdGQt06OEZ2xqQs955VMeP7xkNYYypw";
  // console.log("this is the token", token);
  const getAddress = (place) => {
    // const address1 = `${place.address1}`;
    // const city = `${place.city}`;
    // const state = `${place.state}`;
    // const zip = `${place.zip}`;
    // const address = address1 + " " + city + ", " + state + ", " + zip;
    const lat = place.lat;
    const lng = place.long;

    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${lat},${lng}`;
    const label = "Custom Label";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{ ...styles.title, marginTop: -80 }}>Map</Text>

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
          {location.length != 0 ? (
            location.map((place) => (
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

                      <CalloutSubview
                        onPress={() => {
                          Linking.openURL(`tel:${place.phone}`);
                        }}
                        hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }}
                        style={{ zIndex: 99999 }}
                      >
                        <Text style={{ fontSize: 30, color: "blue" }}>
                          {place.phone}
                        </Text>
                      </CalloutSubview>

                      <CalloutSubview
                        onPress={() => {
                          getAddress(place);
                        }}
                        hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }}
                        style={{ zIndex: 99999 }}
                      >
                        <Text style={{ fontSize: 35, color: "red" }}> Map</Text>
                      </CalloutSubview>

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
            ))
          ) : (
            <ActivityIndicator />
          )}
        </MapView>

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
        <View>
          <Text style={styles.title}> Eligibility</Text>
          <View style={styles.sideEffectsContainer}>
            <View style={styles.sideEffects}>
              <Text>
                {" "}
                CDC recommends giving the COVID-19 vaccine in phases, which may
                overlap with eachother.
              </Text>
              <Text>
                {" "}
                **Check your local and state news to see which priority group
                phase your area is in.{" "}
              </Text>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>
                  {" "}
                  1a: Healthcare personnel and Long-term care facility residents
                </Text>
              </Unorderedlist>

              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>
                  {" "}
                  1b: Frontline essential workers and People age 75 years and
                  older
                </Text>
              </Unorderedlist>
              <Unorderedlist style={styles.sideEffectsOL}>
                <Text>
                  1c: People aged 65 through 74 years and People aged 16 through
                  64 years with underlying medical conditions and Other
                  essential workers
                </Text>
              </Unorderedlist>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}> Appointments</Text>
          <View style={styles.sideEffectsContainer}>
            <View style={styles.sideEffects}>
              <Text>
                {" "}
                Please call the location youre interested in setting up an
                appointment with.{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    padding: 6,
    backgroundColor: "#4130E6",
    borderRadius: 7,
  },
  TextStyle: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
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
    marginTop: 90,
    marginBottom: -10,
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
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 450,
    margin: "3%",
    borderRadius: 40,
    backgroundColor: "#F8F8F8",
    maxHeight: "auto",
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
