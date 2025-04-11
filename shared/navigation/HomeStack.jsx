import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ShopInfoScreen from "../screens/ShopInfoScreen/ShopInfoScreen";
import { useTheme } from 'react-native-paper';
import useHeaderStyles from "../hooks/stackHeaderStyles"

const Stack = createStackNavigator();

export default function HomeStack() {
  const headerStyles = useHeaderStyles();
  return (
    <Stack.Navigator
    screenOptions={headerStyles}
    >
        <Stack.Screen
            name="HomeMain"
            component={HomeScreen}
            options={{ title: 'Home' }}
        />
        <Stack.Screen
            name="ShopInfo"
            component={ShopInfoScreen}
            options={{ title: 'Home' }}
        />
    </Stack.Navigator>
  );
}
