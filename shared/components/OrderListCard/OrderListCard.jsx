import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GameService from "../../../data/Services/GameService";

export default function OrderListCard({order}){
    const theme = useTheme();
    return(
        <View style={{justifyContent: "space-between", width: "100%", alignItems: "left", paddingHorizontal: 15, paddingVertical: 20, borderRadius: 15, backgroundColor: theme.colors.surface, gap: 2}}>
            <Text variant="bold" style={{fontSize: 14}} numberOfLines={1}>Date: {order.date.toDate().toLocaleString()}</Text>
            <Text variant="bold" style={{fontSize: 14}} numberOfLines={1}>Dleivery Method: {order.deliveryMethod}</Text>
            <Text variant="bold" style={{fontSize: 14}} numberOfLines={1}>Total Price: {order.total}₸</Text>
        </View>
    );
}