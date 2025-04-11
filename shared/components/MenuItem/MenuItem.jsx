import React from "react";
import { Pressable, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function MenuItem({title, onPress}){
    const theme = useTheme();
    return(
        <Pressable onPress={onPress} style={{alignSelf: "stretch", justifyContent: "center", height: 70, marginHorizontal: 10, padding: 10, backgroundColor: theme.colors.surface, borderRadius: 10}}>
            <Text variant="bold" style={{fontSize: 20}}>{title}</Text>
        </Pressable>
    );
}