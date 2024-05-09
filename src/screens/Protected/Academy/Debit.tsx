import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@gluestack-ui/themed';

import ProtectedLayout from '@/screens/Layouts/ProtectedLayout';

export default function DebitScreen() {
  return (
    <ProtectedLayout>
      <Text style={styles.text}>Débitos</Text>
    </ProtectedLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
