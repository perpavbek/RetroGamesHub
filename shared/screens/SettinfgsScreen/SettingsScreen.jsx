import React from "react";
import { View, Text } from "react-native";
import { useTheme } from 'react-native-paper';
import ThemeChanger from "../../components/ThemeChanger/ThemeChanger";
import MenuItem from "../../components/MenuItem/MenuItem";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: 'center', paddingTop: 20, gap: 20}}>
      <ThemeChanger/>
      <MenuItem title="Profile" onPress={() => navigation.navigate("Profile")}/>
    </View>
  );
  }