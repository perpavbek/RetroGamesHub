import React from "react";
import { View, FlatList  } from "react-native";
import { Text, useTheme } from "react-native-paper";
import GameScrollCard from "../GameScrollCard/GameScrollCard";

export default function HorizontalGamesScroll({ data, ...props }){
    const theme = useTheme();
    return(
        <View>
            <Text variant="bold" style={{fontSize: 22, margin: 20, color: theme.colors.onSurface}}>{props.blockTitle}</Text>
            <View style={{width: "100%", flexDirection: "row"}}>
                <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item }) => (
                    <GameScrollCard onCardPress={props.onCardPress} cardInfo={item}/>
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{}}
                />
            </View>
        </View>
    );
}