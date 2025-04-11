import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';

export default function MyGamesScreen() {
    const theme = useTheme();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text variant="bold">My Games</Text>
      </View>
    );
  }