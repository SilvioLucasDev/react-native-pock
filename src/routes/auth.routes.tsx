import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@/screens/Auth/Login';
import RegisterScreen from '@/screens/Auth/Register';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
