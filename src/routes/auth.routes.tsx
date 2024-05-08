import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import AppRoutes from '@/routes/app.routes';
import AcademyRoutes from '@/routes/academy.routes';

import PreloadScreen from '@/screens/Auth/Preload';
import LoginScreen from '@/screens/Auth/Login';
import RegisterScreen from '@/screens/Auth/Register';
import NotificationScreen from '@/screens/App/Notification';

import BackArrow from '@/components/navigation/BackArrow';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={PreloadScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notificações',
          headerShown: true,
          headerBackVisible: false,
          headerLeft: () => (
            <BackArrow
              onPress={navigation.goBack}
              marginLeft={5}
              paddingRight={15}
            />
          ),
        }}
      />
      <Stack.Screen name="AppRoutes" component={AppRoutes} />
      <Stack.Screen name="AcademyRoutes" component={AcademyRoutes} />
    </Stack.Navigator>
  );
}
