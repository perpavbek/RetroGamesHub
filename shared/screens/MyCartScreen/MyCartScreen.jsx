import React, { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';
import CartGoodsList from "../../components/CartGoodsList/CartGoodsList";
import CartService from "../../../data/Services/CartService";

export default function MyCartScreen() {
    const [goods, setGoods] = useState();
    useFocusEffect(() => {
      async function loadCart(){
        const cart = await CartService.getUserCart();
        setGoods(cart);
      }
      loadCart();
    });
    const theme = useTheme();
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <CartGoodsList goods={goods}/>
      </View>
    );
  }