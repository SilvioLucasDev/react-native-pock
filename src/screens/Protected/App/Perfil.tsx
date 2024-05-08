import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Button, ButtonText, Text, View } from '@gluestack-ui/themed';

import { useAuth } from '@/context/AuthContext';

export default function PerfilScreen() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil</Text>

      <Box m="$5">
        <Button onPress={() => handleLogout()}>
          <ButtonText>Sair</ButtonText>
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
});
