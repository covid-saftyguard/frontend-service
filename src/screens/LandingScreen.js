import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function LandingScreen() {
  return (
    <View>
      <Text>Log In Below:</Text>
      <TouchableOpacity onPress={() => console.log('This is so kewl!!')}>
        <Text>Click ME!</Text>
      </TouchableOpacity>
    </View>
  );
}
