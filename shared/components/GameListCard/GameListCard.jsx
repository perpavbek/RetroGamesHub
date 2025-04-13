import React, { useEffect, useState } from "react";
import { View, Image, Pressable } from "react-native";
import { useTheme, Text } from "react-native-paper";
import FavoritesService from "../../../data/Services/FavoritesService";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useFocusEffect } from "@react-navigation/native";

export default function GameListCard({cardInfo, onCardPress, onRemoveFavorite}){
    const theme = useTheme();
    const [favorite, setFavorite] = useState(false);
    useFocusEffect(()=>{
        async function checkFavorite(){
            const isFavourite = await FavoritesService.isFavorite(cardInfo.id);
            setFavorite(isFavourite);
        }
        checkFavorite();
    });
    async function changeFavorite(){
        try {
            if (favorite) {
                await FavoritesService.removeFavorite(cardInfo.id);
                setFavorite(false);
                onRemoveFavorite?.();
            } else {
                await FavoritesService.addFavorite(cardInfo.id);
                setFavorite(true);
            }
        } catch (error) {
        console.error('Favorites updating error:', error);
        }
    }
    return(
        <Pressable 
        onPress={() => onCardPress(cardInfo)}
        style={{
            width: "100%", 
            backgroundColor: theme.colors.primary, 
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.colors.surface,
            flexDirection: "row",
        }}>
            <View style={{aspectRatio: 3/4, flex: 0.3}}>
                <Image source={{uri: cardInfo.cover}} resizeMode="cover" style={{height: "100%", width: "100%"}}/>
            </View>
            <View style={{alignItems: "flex-start", justifyContent: "center", alignSelf: "center", flex: 0.7, padding: 20}}>
                <Text variant="bold" style={{fontSize: 18, color: theme.colors.onSurface}}>{cardInfo.title}</Text>
            </View>
            <View style={{flex: 0.2, justifyContent: "center", alignItems: "center"}}>
                <FavoriteButton isFavorite={favorite} onPress={changeFavorite}/>
            </View>
        </Pressable>
    );
}