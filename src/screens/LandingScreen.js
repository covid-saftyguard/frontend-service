import React from 'react';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';
import covidFighter from '../../assets/fighting-covid-virus.jpg';

var provider = new firebase.auth.GoogleAuthProvider();

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId: ANDROID_CLIENT_ID,
      iosClientId: IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      console.log(result);
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

export default function LandingScreen({ navigation, route }) {
  const signInWithPopup = () => {
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <View style={{ ...styles.container }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Covid SafeGuard Title */}
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '900',
              color: '#D83472',
              marginTop: 42,
              marginBottom: 70,
            }}
          >
            COVID SafeGuard
          </Text>
        </View>
        {/* Covid Fighter Image */}
        <View style={{ flex: 2, marginBottom: 120 }}>
          <Image style={styles.imageSize} source={covidFighter} />
        </View>
        {/* Login/Signup Buttons */}
        <View
          style={{
            flex: 2,
            borderColor: 'purple',
          }}
        >
          <TouchableOpacity
            style={styles.logInButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text
              style={[
                styles.whiteText,
                styles.h1,
                styles.centerText,
                styles.buttonText,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text
              style={[
                styles.whiteText,
                styles.h1,
                styles.centerText,
                styles.buttonText,
              ]}
            >
              Signup
            </Text>
          </TouchableOpacity>
          {/* Google Sign In */}
          <TouchableOpacity
            style={styles.googleSigninButton}
            onPress={() => {
              // console.log(provider);
              signInWithGoogleAsync();
            }}
          >
            <Text
              style={[
                styles.whiteText,
                styles.h1,
                styles.centerText,
                styles.buttonText,
              ]}
            >
              Google Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 400,
    height: 330,
  },
  buttonText: {
    fontSize: 27,
    fontWeight: '900',
  },
  logInButton: {
    backgroundColor: '#9EBD53',
    padding: 15,
    width: 370,
    borderRadius: 20,
  },
  signUpButton: {
    backgroundColor: '#D83472',
    marginTop: 15,
    padding: 15,
    width: 370,
    borderRadius: 20,
  },
  googleSigninButton: {
    backgroundColor: '#4285F4',
    marginTop: 15,
    padding: 15,
    width: 370,
    borderRadius: 20,
  },
  centerText: {
    textAlign: 'center',
  },
  h1: {
    fontSize: 20,
  },
  whiteText: {
    color: '#fff',
  },
});
