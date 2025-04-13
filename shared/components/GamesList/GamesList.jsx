import React from "react";
import { View, FlatList  } from "react-native";
import { Text, useTheme } from "react-native-paper";
import GameListCard from "../GameListCard/GameListCard";

export default function GamesList({ data, onRemoveFavorite, onCardPress}){
    const theme = useTheme();
    return(
        <View style={{width: "100%"}}>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <GameListCard onCardPress={onCardPress} cardInfo={item} onRemoveFavorite={onRemoveFavorite}/>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: "column", width: "100%", gap: 15}}
            />
        </View>
    );
}