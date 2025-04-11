import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CatalogScreen from '../screens/CatalogScreen/CatalogScreen';
import useHeaderStyles from "../hooks/stackHeaderStyles"

const Stack = createStackNavigator();

export default function CatalogStack() {
  const headerStyles = useHeaderStyles();
  return (
    <Stack.Navigator
    screenOptions={headerStyles}
    >
      <Stack.Screen
          name="CatalogMain"
          component={CatalogScreen}
          options={{ title: 'Catalog' }}
      />
    </Stack.Navigator>
  );
}
