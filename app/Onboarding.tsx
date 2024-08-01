
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
    AnimatedTabBarNavigator,
    DotSize, // optional
    TabElementDisplayOptions, // optional
    TabButtonLayout, // optional
    IAppearanceOptions // optional
  } from 'react-native-animated-nav-tab-bar'
import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';
  
export default function Onboarding() {
  const Tabs = AnimatedTabBarNavigator();
  return (
    <Tabs.Navigator
    // default configuration from React Navigation
    tabBarOptions={{
      activeTintColor: "#2F7C6E",
      inactiveTintColor: "#222222"
    }}
  >
    <Tabs.Screen name="Welcome1" component={Welcome1} />
    <Tabs.Screen name="Welcome2" component={Welcome2} />
  </Tabs.Navigator>

  );
}
