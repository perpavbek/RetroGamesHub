import React from "react";
import { View } from "react-native";
import { Switch, Text, useTheme } from "react-native-paper";
import { useThemeToggle } from "../../context/ThemeContext";

export default function ThemeChanger() {
    const { isDarkMode, toggleTheme } = useThemeToggle();
    const theme = useTheme();
    return(
        <View style={{flexDirection: "row", alignSelf: "stretch", justifyContent: "space-between", alignItems: "center", height: 70, marginHorizontal: 10, padding: 10, backgroundColor: theme.colors.surface, borderRadius: 10}}>
            <Text variant="bold" style={{fontSize: 20, color: theme.colors.onSurface}}>Dark Mode</Text>
            <Switch value={isDarkMode}onChange={toggleTheme}/>
        </View>
    );
}