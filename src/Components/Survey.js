import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Field,
} from "react-native";
import { Formik } from "formik";

export default function Survey() {
  const submitForm = (values) => {
    console.log(values);
    // fetch(` `, {
    //   method: 'POST',
    //   headers: 'Content-Type':'application/json',
    //   // Authorization: `Bearer ${token}`
    // })
  };
  return (
    <Formik
      initialValues={{
        textInput: "",
        dissatisfied: false,
        happy: false,
        neutral: false,
      }}
      onSubmit={(values) => submitForm(values)}
    >
      {(props) => (
        <View>
          {/* <View style={styles.imageContainer}> */}
          {/* <View
              style={
                props.values.dissatisfied
                  ? styles.selectedDissatisfied
                  : styles.defaultDissatisfied
              }
            >
              <Text>Dissatisfied</Text>
              <Button
                title="dissatisfied"
                onPress={
                  () => console.log("this works")
                  // setFieldValue("dissatisfied", !values.dissatisfied)
                }
              /> 
          {/* <Image
                value={props.values.dissatisfied}
                source={require("./assets/dissatisfied.png")}
                onPress={() =>
                  setFieldValue("dissatisfied", !values.dissatisfied)
                }
              /> */}
          {/* </View>
            <View
              style={
                props.values.happy ? styles.selectedHappy : styles.defaultHappy
              }
            >
              <Text style={styles.happy}>Happy</Text>
              <Image
                source={require("./assets/happy.png")}
                style={styles.happy}
                value={props.values.happy}
                onPress={() => setFieldValue("happy", !values.happy)}
              />
            </View>
            <View
              style={
                props.values.neutral
                  ? styles.selectedNeutral
                  : styles.defaultNeutral
              }
            >
              <Text style={styles.neutral}>Neutral</Text>
              <Image
                source={require("./assets/neutral.png")}
                style={styles.neutral}
                value={props.values.neutral}
                onPress={() => setFieldValue("neutral", !values.neutral)}
              />
            </View>
          </View> */}

          {/* <Button
            style={
              props.values.dissatisfied
                ? styles.selectedDissatisfied
                : styles.defaultDissatisfied
            }
            title="dissatisfied"
            onPress={() =>
              props.setFieldValue(
                "dissatisfied",
                console.log(!props.values.dissatisfied)
              )
            }
          /> */}
          {/* 
          <Field type="radio" value="dissatisfied">
            dissatisfied
          </Field> */}

          {/* <Field type="radio" value="neutral" />
            neutral
         
            <Field type="radio" value="happy" />
            happy
          */}

          <Button title="example" onPress={() => console.log("this works")}>
            <Image
              value={props.values.dissatisfied}
              source={require("./assets/dissatisfied.png")}
            />
          </Button>

          <TextInput
            style={styles.input}
            placeholder="please leave a review"
            onBlur={props.handleBlur("textInput")}
            onChangeText={props.handleChange("textInput")}
            value={props.values.textInput}
          />

          <View style={styles.button}>
            <Button
              title="submit"
              onPress={props.handleSubmit}
              style={styles.submit}
            />
            <Button title="cancel" />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    borderColor: "pink",
    borderStyle: "solid",
    borderWidth: 2,
    left: 20,
    justifyContent: "center",
  },
  selectedDissatisfied: {
    display: "flex",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    top: 300,
    right: 85,
    borderWidth: 2,
    borderColor: "red",
    borderStyle: "solid",
  },
  defaultDissatisfied: {
    display: "flex",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    top: 300,
    left: 30,
    // borderWidth: 2,
    // borderColor: "red",
    // borderStyle: "dotted",
  },
  selectedHappy: {
    display: "flex",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    top: 220,
    left: 190,
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "dotted",
  },
  defaultHappy: {
    display: "flex",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    top: 220,
    left: 190,
    // borderWidth: 2,
    // borderColor: "green",
    // borderStyle: "dotted",
  },
  selectedNeutral: {
    display: "flex",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    top: 140,
    left: 110,
    borderWidth: 2,
    borderColor: "yellow",
    borderStyle: "dotted",
  },
  defaultNeutral: {
    display: "flex",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    top: 140,
    left: 110,
    // borderWidth: 2,
    // borderColor: "yellow",
    // borderStyle: "dotted",
  },
  button: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    top: 330,
  },
  input: {
    display: "flex",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    top: 300,
    borderRadius: 6,
  },
});
