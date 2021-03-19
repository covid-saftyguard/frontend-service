import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder="username" style={styles.input} />
      <TextInput placeholder="password" style={styles.input} />
      <TouchableOpacity onPress={() => {}}>
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
