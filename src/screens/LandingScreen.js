import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import covidFighter from '../../assets/fighting-covid-virus.jpg';

export default function LandingScreen({ navigation, route }) {
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
              fontSize: 35,
              fontWeight: '500',
              color: '#D83472',
              marginTop: 130,
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
            onPress={() => console.log('Signing up', props)}
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
    width: 350,
    borderRadius: 20,
  },
  signUpButton: {
    backgroundColor: '#D83472',
    marginTop: 15,
    padding: 15,
    width: 350,
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
