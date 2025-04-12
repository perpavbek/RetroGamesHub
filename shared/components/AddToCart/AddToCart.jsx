import { useState } from "react";
import { View, Pressable } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddToCart({onAddToCart}){
    const theme = useTheme();
    const [quantity, setQuantity] = useState(1);

    function changeQuantity(dif){
        const currentQuantity = quantity + dif;
        if(currentQuantity <= 1){
            setQuantity(1);
        }
        else{
            setQuantity(currentQuantity);
        }
    }
    return(
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: 60, backgroundColor: theme.colors.surface, marginVertical: 5, paddingHorizontal: 20}}>
            <View style={{flex: 0.3, flexDirection: "row", alignItems: "center", gap: 10}}>
                <Pressable onPress={() => changeQuantity(-1)}>
                    <Icon name="minus" color={theme.colors.primary} size={26}/>
                </Pressable>
                <Text variant="bold" style={{fontSize: 20, backgroundColor: theme.colors.secondaryContainer, paddingHorizontal: 10, borderRadius: 10}}>{quantity}</Text>
                <Pressable onPress={() => changeQuantity(1)}>
                    <Icon name="plus" color={theme.colors.primary} size={26}/>
                </Pressable>
            </View>
            <Pressable onPress={async () => await onAddToCart(quantity)}>
                <Text variant="bold" style={{fontSize: 12, color: theme.colors.onPrimary, backgroundColor: theme.colors.primary, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20}}>Add to Cart</Text>
            </Pressable>
        </View>
    );
}