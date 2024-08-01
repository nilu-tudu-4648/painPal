import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Welcome1 from '../Welcome1';
import Welcome2 from '../Welcome2';

const Tab = createMaterialTopTabNavigator();

export default function Onboarding() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2F7C6E",
        tabBarInactiveTintColor: "#222222",
        tabBarIndicatorStyle: { backgroundColor: "#2F7C6E" },
      }}
    >
      <Tab.Screen name="Welcome1" component={Welcome1} />
      <Tab.Screen name="Welcome2" component={Welcome2} />
    </Tab.Navigator>
  );
}
