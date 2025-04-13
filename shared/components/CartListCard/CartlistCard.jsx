import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GameService from "../../../data/Services/GameService";

export default function CartListCard({good, onCartRemove}){
    const theme = useTheme();
    return(
        <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center", paddingHorizontal: 15, paddingVertical: 20, borderRadius: 15, backgroundColor: theme.colors.surface, gap: 10}}>
            <Text variant="bold" style={{flex: 0.1, textAlign: "center", paddingHorizontal: 5, paddingVertical: 8, borderRadius: 8, backgroundColor: theme.colors.secondaryContainer}}>x{good.quantity}</Text>
            <Text variant="bold" style={{flex: 0.8, fontSize: 12}} numberOfLines={1}>{good.title}</Text>
            <Pressable android_ripple={{ color: theme.colors.secondary }} onPress={() => onCartRemove(good.gameId)} style={{backgroundColor: theme.colors.primary, padding: 6, borderRadius: 8}}>
                <Icon name="cart-remove" size={24} color={theme.colors.onPrimary}/>
            </Pressable>
        </View>
    );
}