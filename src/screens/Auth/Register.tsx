import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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

      <Button title="Registrar-se" onPress={() => handleRegister()} />

      <Button title="Voltar para o Login" onPress={() => navigate('Login')} />
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
