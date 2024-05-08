import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Button, ButtonText, Text, View } from '@gluestack-ui/themed';

import { useNavigation } from '@react-navigation/native';

export default function AcademyScreen() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Academy</Text>

      <Box m="$5">
        <Button onPress={() => navigate('AcademyRoutes', { screen: 'Home' })}>
          <ButtonText>Ir para a academia Shark</ButtonText>
        </Button>
      </Box>
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
  box: {
    padding: 10,
  },
});
