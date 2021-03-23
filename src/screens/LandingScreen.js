import React from 'react';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';
import covidFighter from '../../assets/fighting-covid-virus.jpg';

export default function LandingScreen({ navigation, route }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      navigation.replace('Home');
    } else {
      navigation.navigate('Landing');
    }
  });

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        iosClientId: IOS_CLIENT_ID,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        // console.log(result);
        const { idToken } = result;

        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = provider.credential(idToken);
        provider.addScope('maps');
        provider.addScope('profile');

        firebase
          .auth()
          .signInWithCredential(credential)
          .then(async (data) => {
            // console.log("USER DATA", data.user);
            const creds = data.credential;
            console.log('credential:', creds);
            const user = data.user;
            console.log(user);
            const provData = user.providerData;
            console.log(provData);
            const email = user.email;
            console.log('email:', email);
            const stsTokenManager = creds.oauthIdToken;
            console.log('sts token:', stsTokenManager);
            // const accessToken = stsTokenManager.accessToken;
            // console.log("sts accessToken:", accessToken);
            const token = data.credential.accessToken;
            // console.log("TOKEN FRM LOG IN", token);
            // console.log("LOGGING STS:", data.user);
            await AsyncStorage.setItem('token', token);
            let myToken;
            do {
              if (!myToken) {
                myToken = await AsyncStorage.getItem('token');
              } else {
                navigation.replace('Home');
              }
            } while (true);

            // const myToken = await AsyncStorage.getItem('token')
            // while (true) {
            //   if (!myToken) {
            //     const myToken = await AsyncStorage.getItem('token')
            //   } else {
            //     navigation.replace("Home");
            //   }
            // }

            // navigation.replace("Home");
            // console.log("token here:", token);
            // console.log("SUCCESS:", data);
          })
          .catch((error) => console.log('ERROR', error));
        // console.log('CREDS', credential);
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  return (
    <ScrollView>
      <SafeAreaView>
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
            <View style={{ flex: 2, marginBottom: 50 }}>
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
                  // googleSignin();
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
      </SafeAreaView>
    </ScrollView>
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
    marginBottom: 15,
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
