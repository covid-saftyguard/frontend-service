import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
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
    margin: 100,
    width: 310,
    borderWidth: 1,
  },
});
