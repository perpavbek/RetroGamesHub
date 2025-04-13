import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';
import HorizontalShopsScroll from "../../components/HorizontalShopsScroll/HorizontalShopsScroll";
import { useFocusEffect } from "@react-navigation/native";
import ShopService from "../../../data/Services/ShopService";

export default function HomeScreen() {
  const [shops, setShops] = useState([]);
  const theme = useTheme();
  useFocusEffect(()=>{
    async function loadShops() {
      const loadedShops = await ShopService.getAllShops();
      setShops(loadedShops); 
    }
    loadShops();
  });
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <HorizontalShopsScroll data={shops} blockTitle="Game Shops"/>
    </ScrollView>
  );
}