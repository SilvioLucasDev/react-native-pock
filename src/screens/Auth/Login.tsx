import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '@/context/AuthContext';

export default function LoginScreen() {
  const { navigate } = useNavigation();
  const { login } = useAuth();

  const handleLogin = () => {
    login({ email: 'silvio@hotmail.com', password: '12345' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Login</Text>

      <Button title="Logar" onPress={() => handleLogin()} />

      <Button title="Registrar-se" onPress={() => navigate('Register')} />
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
