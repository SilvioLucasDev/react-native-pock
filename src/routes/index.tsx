import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from '@/routes/auth.routes';
import ProtectedRoutes from '@/routes/proteced.routes';

import { useAuth } from '@/context/AuthContext';

export default function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <ProtectedRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
