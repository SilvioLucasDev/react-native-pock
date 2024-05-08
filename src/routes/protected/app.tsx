import React from 'react';
import { Pressable } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { Foundation, Ionicons } from '@expo/vector-icons';

import AcademyScreen from '@/screens/Protected/App/Academy';
import HomeScreen from '@/screens/Protected/App/Home';
import PerfilScreen from '@/screens/Protected/App/Perfil';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  const { navigate } = useNavigation();

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Academy"
        component={AcademyScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
          headerRight: () => (
            <Pressable onPress={() => navigate('Notification')}>
              {({ pressed }) => (
                <Ionicons
                  name="notifications"
                  size={25}
                  style={{
                    marginRight: 15,
                    opacity: pressed ? 0.5 : 1,
                  }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
