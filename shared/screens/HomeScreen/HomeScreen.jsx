import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';
import HorizontalShopsScroll from "../../components/HorizontalShopsScroll/HorizontalShopsScroll";
import { useFocusEffect } from "@react-navigation/native";
import ShopService from "../../../data/Services/ShopService";
import MapWidget from "../../components/MapWidget/MapWidget";
import { mapShopToMarker } from "../../../data/mappers/mapShopToMarker";

export default function HomeScreen() {
  const [shops, setShops] = useState([]);
  const [markers, setMarkers] = useState([]);
  const theme = useTheme();
  
  useFocusEffect(()=>{
    async function loadShops() {
      const loadedShops = await ShopService.getAllShops();
      setShops(loadedShops); 
    }
    loadShops();
  });

  useEffect(()=>{
    const mappedMarkers = shops.map(mapShopToMarker);
    setMarkers(mappedMarkers);
  }, [shops]);

  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <View style={{width: "100%", paddingHorizontal: 10}}>
        <Text variant="bold" style={{fontSize: 22, marginHorizontal: 10, marginVertical: 20, color: theme.colors.onSurface}}>Game shops on map</Text>
        <MapWidget markers={markers}/>
      </View>
      <HorizontalShopsScroll data={shops} blockTitle="Game Shops"/>
    </ScrollView>
  );
}