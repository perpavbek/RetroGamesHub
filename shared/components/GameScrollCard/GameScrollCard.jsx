import React from "react";
import { View, Image, Pressable } from "react-native";
import { useTheme, Text } from "react-native-paper";

export default function GameScrollCard({cardInfo, ...props}){
    const theme = useTheme();
    return(
        <Pressable 
        onPress={() => props.onCardPress(cardInfo)}
        style={{
            width: 180, 
            aspectRatio: 2/3, 
            backgroundColor: theme.colors.primary, 
            marginHorizontal: 15,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.colors.surface}}
        >
            <Image source={cardInfo.cover} resizeMode="cover" style={{height: "100%", width: "100%", flex: 0.8}}/>
            <View style={{width: 150, flex: 0.2, alignItems: "flex-start", justifyContent: "center", alignSelf: "center"}}>
                <Text variant="bold" style={{fontSize: 18, color: theme.colors.onSurface}}>{cardInfo.title}</Text>
            </View>
        </Pressable>
    );
}