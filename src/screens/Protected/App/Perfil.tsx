import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';

import { useAuth } from '@/context/AuthContext';

import ProtectedLayout from '@/screens/Layouts/ProtectedLayout';

export default function PerfilScreen() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <ProtectedLayout>
      <Text style={styles.text}>Perfil</Text>

      <Box m="$5">
        <Button onPress={() => handleLogout()}>
          <ButtonText>Sair</ButtonText>
        </Button>
      </Box>
    </ProtectedLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
