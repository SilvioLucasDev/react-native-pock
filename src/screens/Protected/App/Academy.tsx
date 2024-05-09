import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';

import { useNavigation } from '@react-navigation/native';

import ProtectedLayout from '@/screens/Layouts/ProtectedLayout';

export default function AcademyScreen() {
  const { navigate } = useNavigation();

  return (
    <ProtectedLayout>
      <Text style={styles.text}>Academy</Text>

      <Box m="$5">
        <Button onPress={() => navigate('AcademyRoutes', { screen: 'Home' })}>
          <ButtonText>Ir para a academia Shark</ButtonText>
        </Button>
      </Box>
    </ProtectedLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
  box: {
    padding: 10,
  },
});
