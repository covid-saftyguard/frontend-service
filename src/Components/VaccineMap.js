import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import MapView, { AnimatedRegion, Marker } from "react-native-maps";

function VaccineMap() {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  useEffect(() => {
    console.log("did this work?");
    const token =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRlMDBlOGZlNWYyYzg4Y2YwYzcwNDRmMzA3ZjdlNzM5Nzg4ZTRmMWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY292aWQtc2FmZWd1YXJkLTAiLCJhdWQiOiJjb3ZpZC1zYWZlZ3VhcmQtMCIsImF1dGhfdGltZSI6MTYxNjA0NjI1MiwidXNlcl9pZCI6Ik1ib1BjTnVrWjRNRDk5VXhaT3VmcXc2Qzc3ejEiLCJzdWIiOiJNYm9QY051a1o0TUQ5OVV4Wk91ZnF3NkM3N3oxIiwiaWF0IjoxNjE2MDQ2MjUyLCJleHAiOjE2MTYwNDk4NTIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluQGFkbWluLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i5REEQ00TiRn3wykZ_AEVn6lcKZvaBNPdgkeP4fJNfY3IFpKw0vVyg8u1gl_G8wflFkl3v_-u9eNKkI3pVw_eV7b1gDs_39NRqvmbLjMCop_nbKAOc3fE_TGHI9fcRZs9fdA0Sm7En36a-SlAU8hN8FYhW4Y0v6mnhetqhHkE0_Cpt6BbCcdMe-xqjNTaBacacXLgIXzfj1HK9iB3dXnWfwtNTfkpLzUmxSDv8zC2YI4cvaDsrTO_Q-0wJpr5r-n5crcVFgjRgV4EXxidWrl28dIaWJPBW7MPkTLsRR6TzrpY8AOCibD_zQNEpuk_NfqcOzU8cpRBeNJ7VdSjksJ3A";
    fetch(
      "http://ec2-18-216-242-223.us-east-2.compute.amazonaws.com/api/vaccine/location?lat=41.86&lon=-87.62",
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
  }, []);

  console.log("this is the data", location);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}
        >
          {/* {location.map((place) => (
            <Marker
              coordinate={{ latitude: place.lat, longitude: place.long }}
            />
          ))} */}
        </MapView>
        <View style={styles.sideEffects}>
          <Text>Side Effects</Text>
        </View>
        <View style={styles.dosage}>
          <Text>Recommend Dosage</Text>
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
  sideEffects: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    borderColor: "pink",
    borderWidth: 1,
    width: "90%",
    height: "30%",
    borderStyle: "solid",
    margin: "3%",
    borderRadius: 10,
  },
  dosage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    borderColor: "orange",
    borderWidth: 1,
    width: "90%",
    height: Dimensions.get("screen").height * 0.3,
    top: 1,
    borderStyle: "solid",
    margin: "3%",
    borderRadius: 10,
  },
});

export default VaccineMap;
