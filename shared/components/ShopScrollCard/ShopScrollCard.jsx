import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Pressable } from "react-native";
import { useTheme, Text } from "react-native-paper";

export default function ShopScrollCard({ shopInfo, ...props}){
    const theme = useTheme();
    const navigation = useNavigation();
    return(
        <Pressable onPress={() => navigation.navigate('ShopInfo', shopInfo)}>
            <View style={{
            width: 250, 
            aspectRatio: 4/3, 
            backgroundColor: theme.colors.primary, 
            marginHorizontal: 15,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.colors.surface}}>
            <Image source={{uri: shopInfo.image}} resizeMode="cover" style={{height: "100%", width: "100%", flex: 0.8}}/>
            <View style={{width: 220, flex: 0.3, alignItems: "flex-start", justifyContent: "center", alignSelf: "center"}}>
                <Text variant="bold" style={{fontSize: 18, color: theme.colors.onSurface}}>{shopInfo.title}</Text>
            </View>
        </View>
        </Pressable>
    );
}