import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '@/context/AuthContext';

import AppRoutes from '@/routes/protected/app';
import AcademyRoutes from '@/routes/protected/academy';

import NotificationScreen from '@/screens/Protected/App/Notification';
import ChooseRolesScreen from '@/screens/Protected/App/ChooseRoles';

import BackArrow from '@/components/Navigation/BackArrow';

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
      <Stack.Screen name="ChooseRoles" component={ChooseRolesScreen} />
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
