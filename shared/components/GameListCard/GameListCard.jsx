import React from "react";
import { View, Image, Pressable } from "react-native";
import { useTheme, Text } from "react-native-paper";

export default function GameListCard({cardInfo, ...props}){
    const theme = useTheme();
    return(
        <Pressable 
        onPress={() => props.onCardPress(cardInfo)}
        style={{
            width: "100%", 
            backgroundColor: theme.colors.primary, 
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.colors.surface,
            flexDirection: "row",
        }}>
            <View style={{aspectRatio: 3/4, flex: 0.3}}>
                <Image source={cardInfo.cover} resizeMode="cover" style={{height: "100%", width: "100%"}}/>
            </View>
            <View style={{alignItems: "flex-start", justifyContent: "center", alignSelf: "center", flex: 0.7, padding: 20}}>
                <Text variant="bold" style={{fontSize: 18, color: theme.colors.onSurface}}>{cardInfo.title}</Text>
            </View>
        </Pressable>
    );
}