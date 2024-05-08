import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DebitScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Débitos</Text>
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
