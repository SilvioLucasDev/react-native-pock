import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from '@/routes/public';
import ProtectedRoutes from '@/routes/protected';

import { useAuth } from '@/context/AuthContext';

export default function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <ProtectedRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
