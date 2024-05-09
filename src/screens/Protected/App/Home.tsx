import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@gluestack-ui/themed';

import ProtectedLayout from '@/screens/Layouts/ProtectedLayout';

export default function HomeScreen() {
  return (
    <ProtectedLayout>
      <Text style={styles.text}>Home</Text>
    </ProtectedLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
