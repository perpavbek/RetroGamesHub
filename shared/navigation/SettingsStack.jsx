import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettinfgsScreen/SettingsScreen';
import useHeaderStyles from "../hooks/stackHeaderStyles"
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator();

export default function SettingsStack() {
  const headerStyles = useHeaderStyles();
  return (
    <Stack.Navigator
    screenOptions={headerStyles}
    >
      <Stack.Screen
          name="SettingsMain"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
      />
      <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}
