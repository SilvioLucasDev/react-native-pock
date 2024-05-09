import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@gluestack-ui/themed';

import ProtectedLayout from '@/screens/Layouts/ProtectedLayout';

export default function ChooseRolesScreen() {
  return (
    <ProtectedLayout>
      <Text style={styles.text}>Choose Roles</Text>
    </ProtectedLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
