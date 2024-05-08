import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function PreloadScreen() {
  const navigation = useNavigation();

  navigation.navigate('Login');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preload</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
