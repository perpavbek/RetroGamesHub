import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import useHeaderStyles from "../hooks/stackHeaderStyles";
import MyCartScreen from "../screens/MyCartScreen/MyCartScreen";
import CreateOrderScreen from '../screens/CreateOrderScreen/CreateOrderScreen';

const Stack = createStackNavigator();

export default function MyCartStack() {
  const headerStyles = useHeaderStyles();
  return (
    <Stack.Navigator
    screenOptions={headerStyles}
    >
        <Stack.Screen
            name="MyCartMain"
            component={MyCartScreen}
            options={{ title: 'My Cart' }}
        />
        <Stack.Screen
            name="CreateOrder"
            component={CreateOrderScreen}
            options={{ title: 'Create Order' }}
        />
    </Stack.Navigator>
  );
}
