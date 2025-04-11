import React from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';
import HorizontalShopsScroll from "../../components/HorizontalShopsScroll/HorizontalShopsScroll";
import { shops } from "../../../data/shops";


export default function HomeScreen() {
  const theme = useTheme();
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <HorizontalShopsScroll data={shops} blockTitle="Game Shops"/>
    </ScrollView>
  );
}