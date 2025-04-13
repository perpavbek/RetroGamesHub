import React, { useEffect, useState } from "react";
import { View, Image, Pressable } from "react-native";
import { useTheme, Text } from "react-native-paper";
import FavoritesService from "../../../data/Services/FavoritesService";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useFocusEffect } from "@react-navigation/native";

export default function GameScrollCard({cardInfo, onCardPress}){
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
            position: "relative",
            width: 180, 
            aspectRatio: 2/3, 
            backgroundColor: theme.colors.primary, 
            marginHorizontal: 15,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.colors.surface}}
        >
            <View style={{position: "absolute", top: 15, right: 15, zIndex: 2}}>
                <FavoriteButton isFavorite={favorite} onPress={changeFavorite}/>
            </View>
            <Image source={{uri: cardInfo.cover}} resizeMode="cover" style={{height: "100%", width: "100%", flex: 0.8}}/>
            <View style={{width: 150, flex: 0.2, alignItems: "flex-start", justifyContent: "center", alignSelf: "center"}}>
                <Text variant="bold" style={{fontSize: 18, color: theme.colors.onSurface}}>{cardInfo.title}</Text>
            </View>
        </Pressable>
    );
}