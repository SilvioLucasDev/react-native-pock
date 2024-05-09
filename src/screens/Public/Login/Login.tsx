import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Button, ButtonText, Text, View } from '@gluestack-ui/themed';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '@/context/AuthContext';

import PublicLayout from '@/screens/Layouts/PublicLayout';

export default function LoginScreen() {
  const { navigate } = useNavigation();
  const { login } = useAuth();

  const handleLogin = () => {
    login({ email: 'silvio@hotmail.com', password: '12345' });
  };

  return (
    <PublicLayout>
      <Text style={styles.text}>Tela de Login</Text>

      <Box m="$5">
        <Button onPress={() => handleLogin()}>
          <ButtonText>Logar</ButtonText>
        </Button>
      </Box>

      <Box mb="$5">
        <Button onPress={() => navigate('AppRoutes', { screen: 'Home' })}>
          <ButtonText>Entrar sem login</ButtonText>
        </Button>
      </Box>

      <Button onPress={() => navigate('Register')}>
        <ButtonText>Registrar-se</ButtonText>
      </Button>
    </PublicLayout>
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
