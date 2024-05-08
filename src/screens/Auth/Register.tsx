import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Button, ButtonText, Text, View } from '@gluestack-ui/themed';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '@/context/AuthContext';

export default function RegisterScreen() {
  const { navigate } = useNavigation();
  const { register } = useAuth();

  const handleRegister = () => {
    register({
      email: 'silvio@hotmail.com',
      password: '12345',
      confirmPassword: '12345',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Registro</Text>

      <Box m="$5">
        <Button onPress={() => handleRegister()}>
          <ButtonText>Registrar-se</ButtonText>
        </Button>
      </Box>

      <Button onPress={() => navigate('Login')}>
        <ButtonText>Voltar para o Login</ButtonText>
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
  box: {
    padding: 10,
  },
});
