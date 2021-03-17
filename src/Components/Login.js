import React, { useState } from 'react';
import firebase from 'firebase';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function Login() {
  // const [email, ]

  return (
    <View style={styles.container}>
      <TextInput placeholder="username" style={styles.input} />
      <TextInput placeholder="password" style={styles.input} />
      <TouchableOpacity
        onPress={() => {
          // console.log('Stop clicking me');
          // firebase
          //   .auth()
          //   .signInWithEmailAndPassword(email, password)
          //   .then((userCredential) => {
          //     // Signed in
          //     var user = userCredential.user;
          //     // ...
          //   })
          //   .catch((error) => {
          //     var errorCode = error.code;
          //     var errorMessage = error.message;
          //   });
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    marginBottom: 20,
    width: 310,
    borderWidth: 1,
  },
});
