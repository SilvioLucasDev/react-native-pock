import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@gluestack-ui/themed';

import ProtectedLayout from '@/screens/Layouts/ProtectedLayout';

export default function EvolutionScreen() {
  return (
    <ProtectedLayout>
      <Text style={styles.text}>Evolução</Text>
    </ProtectedLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
