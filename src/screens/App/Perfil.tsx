import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, ButtonText } from '@gluestack-ui/themed';

import { useAuth } from '@/context/AuthContext';

export default function PerfilScreen() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil</Text>

      <Button onPress={() => handleLogout()}>
        <ButtonText>Sair</ButtonText>
      </Button>
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
