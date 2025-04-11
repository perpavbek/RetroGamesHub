import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyGamesScreen from '../screens/MyGamesScreen/MyGamesScreen';
import useHeaderStyles from "../hooks/stackHeaderStyles"

const Stack = createStackNavigator();

export default function MyGamesStack() {
  const headerStyles = useHeaderStyles();
  return (
    <Stack.Navigator
    screenOptions={headerStyles}
    >
      <Stack.Screen
          name="MyGamesMain"
          component={MyGamesScreen}
          options={{ title: 'My games' }}
      />
    </Stack.Navigator>
  );
}
