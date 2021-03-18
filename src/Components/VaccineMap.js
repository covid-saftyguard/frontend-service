import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import MapView, { AnimatedRegion, Marker, Callout } from "react-native-maps";
import vaccine_marker from "./assets/vaccine_marker.png";
import Unorderedlist from "react-native-unordered-list";

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

  const fetchVaccineLocations = () => {
    const token =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRlMDBlOGZlNWYyYzg4Y2YwYzcwNDRmMzA3ZjdlNzM5Nzg4ZTRmMWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY292aWQtc2FmZWd1YXJkLTAiLCJhdWQiOiJjb3ZpZC1zYWZlZ3VhcmQtMCIsImF1dGhfdGltZSI6MTYxNjEwODIwMywidXNlcl9pZCI6Ik1ib1BjTnVrWjRNRDk5VXhaT3VmcXc2Qzc3ejEiLCJzdWIiOiJNYm9QY051a1o0TUQ5OVV4Wk91ZnF3NkM3N3oxIiwiaWF0IjoxNjE2MTA4MjAzLCJleHAiOjE2MTYxMTE4MDMsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluQGFkbWluLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.P1TVRpC-0uPz1lv6TMSJZF0VpcErNgdoBBgC97eEWZzebeSmfCCBZalMVRn05PPfJGcO-VoRQz1w5v2zhOxfXoTByh7P7LcHkir91giAIQp8R_t6nACv_qFzhMYfYH6TLKXmt4-dWsnjFvqgr2wfU21iDjF8ILf4CllRbUvyUJkjVBjCwOMZ6PQN5K9vcZHBS5tXC-aprznp-qzr9i9OY094uWfPEm-ttL57cwguJIhlAPfS2SUHE-Lwn4oyZkkTLKL0BJVCPmU5ot-Ul0X2ZMtTxf2YjabT0hk9QgE1mmh81J4so7FN0Rf_j6ZYAR_NcwQuFOugBpQv0Y0exxodzQ";
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
        <View style={styles.sideEffectsContainer}>
          <Text style={styles.title}>Side Effects</Text>
          <View style={styles.sideEffects}>
            {/* <Text> Pain, Redness, Swelling</Text> */}
            <ScrollView nestedScrollEnabled={true}>
              <Text>On the arm after the shot:</Text>
              <Unorderedlist>
                <Text>Pain</Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>Redness</Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>Swelling</Text>
              </Unorderedlist>
              <Text>Throughout the rest of your body:</Text>
              {/* <Text>Tiredness, Headache, Muscle pain, Chills, Fever, Nausea</Text> */}
              <Unorderedlist>
                <Text>Tiredness</Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>Headache</Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>Muscle pain</Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>Chills</Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>Fever</Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>Nausea</Text>
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
    marginBottom: "60%",
    // display: "flex",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
  },
  map: {
    width: 300,
    height: 300,
  },
  sideEffectsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    borderColor: "pink",
    borderWidth: 1,
    width: "90%",
    height: "50%",
    borderStyle: "solid",
    margin: "3%",
    borderRadius: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    position: "absolute",
  },
  sideEffects: {
    // width: "90%",
    // height: "30%",
    display: "flex",
    paddingTop: 50,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "column",
    alignItems: "flex-end",
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
