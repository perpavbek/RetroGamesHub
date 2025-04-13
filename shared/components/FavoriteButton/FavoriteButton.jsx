import React from "react";
import { Pressable } from "react-native";
import { useTheme } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function FavoriteButton({isFavorite, onPress, size = 30}){
    const theme = useTheme();
    return(
        <Pressable android_ripple={{ color: theme.colors.secondary }} onPress={onPress}>
            <Icon
                name={isFavorite ? 'cards-heart' : 'cards-heart-outline'}
                color={theme.colors.primary}
                size={size}
            />
        </Pressable>
    );
}