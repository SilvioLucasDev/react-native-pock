import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import EvolutionScreen from '@/screens/Academy/Evolution';
import HomeScreen from '@/screens/Academy/Home';
import DebitScreen from '@/screens/Academy/Debit';

import BackArrow from '@/components/navigation/BackArrow';

const Tab = createBottomTabNavigator();

export default function AcademyRoutes() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Evolution"
        component={EvolutionScreen}
        options={{
          title: 'Evolução',
          tabBarLabel: 'Evolução',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="trending-up-outline" size={size} color={color} />
          ),
          headerLeft: () => <BackArrow onPress={navigation.goBack} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="barbell" size={size} color={color} />
          ),
          headerLeft: () => <BackArrow onPress={navigation.goBack} />,
        }}
      />
      <Tab.Screen
        name="debit"
        component={DebitScreen}
        options={{
          title: 'Débitos',
          tabBarLabel: 'Débitos',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cash" size={size} color={color} />
          ),
          headerLeft: () => <BackArrow onPress={navigation.goBack} />,
        }}
      />
    </Tab.Navigator>
  );
}
