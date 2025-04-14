import React, { useState } from "react";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Pressable, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';
import CartGoodsList from "../../components/CartGoodsList/CartGoodsList";
import CartService from "../../../data/Services/CartService";
import OrdersList from "../../components/OrdersList/OrdersList";
import OrderService from "../../../data/Services/OrderService";

export default function MyCartScreen() {
    const [goods, setGoods] = useState([]);
    const [orders, setOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigation = useNavigation();
    async function loadCart(){
      const cart = await CartService.getUserCart();
      setGoods(cart);
      setTotalPrice(cart?.reduce((sum, item) => sum + item.price * item.quantity, 0));
    }
    async function loadOrders() {
      const loadedOrders = await OrderService.getOrdersByUser();
      setOrders(loadedOrders);
    }
    useFocusEffect(() => {
      loadCart();
      loadOrders();
    });
    async function handleCartRemove(id) {
      setGoods(goods.filter((item) => item.id !== id));
      await CartService.removeFromCart(id);
      await loadCart();
    }

    const theme = useTheme();
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', gap: 20, padding: 20}}>
        {orders.length !== 0 &&
          <>
            <Text variant="bold" style={{fontSize: 20, alignSelf: "left"}}>Your Orders</Text>
            <OrdersList orders={orders} />
          </>
        }
        {goods.length !== 0 ?
          <>
          <Text variant="bold" style={{fontSize: 20, alignSelf: "left"}}>Your Cart</Text>
          <CartGoodsList goods={goods} onCartRemove={async(id) => await handleCartRemove(id)}/>
          <Pressable onPress={() => navigation.navigate("CreateOrder")}style={{paddingHorizontal: 15, paddingVertical: 8, backgroundColor: theme.colors.primary, borderRadius: 20}}>
            <Text variant="bold" style={{color: theme.colors.onPrimary}}>Create order {totalPrice.toFixed(2)}₸</Text>
          </Pressable>
          </>
          :
          <Text variant="bold" style={{marginVertical: "auto"}}>There isn't any goods in your cart</Text>
        }
      </ScrollView>
    );
  }