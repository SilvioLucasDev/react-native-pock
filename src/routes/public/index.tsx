import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@/screens/Public/Login';
import RegisterScreen from '@/screens/Public/Register';
import RestoreScreen from '@/screens/Public/Restore';

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
      <Stack.Screen name="Restore" component={RestoreScreen} />
    </Stack.Navigator>
  );
}
