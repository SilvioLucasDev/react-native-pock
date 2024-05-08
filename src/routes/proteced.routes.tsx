import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import AppRoutes from '@/routes/app.routes';
import AcademyRoutes from '@/routes/academy.routes';

import { useAuth } from '@/context/AuthContext';

import NotificationScreen from '@/screens/App/Notification';

import BackArrow from '@/components/navigation/BackArrow';

const Stack = createNativeStackNavigator();

export default function ProtectedRoutes() {
  const { navigate, goBack } = useNavigation();
  const { user } = useAuth();

  React.useEffect(() => {
    if (!user) {
      navigate('Login');
    }
  }, [user, navigate]);

  return (
    <Stack.Navigator
      initialRouteName="AppRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notificações',
          headerShown: true,
          headerBackVisible: false,
          headerLeft: () => (
            <BackArrow onPress={goBack} marginLeft={5} paddingRight={15} />
          ),
        }}
      />
      <Stack.Screen name="AppRoutes" component={AppRoutes} />
      <Stack.Screen name="AcademyRoutes" component={AcademyRoutes} />
    </Stack.Navigator>
  );
}
