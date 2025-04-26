import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GamesList from "../../components/GamesList/GamesList";
import GameInfoSheet from "../../components/GameInfoSheet/GameInfoSheet";
import MapWidget from "../../components/MapWidget/MapWidget";
import GameService from "../../../data/Services/GameService";
import { mapShopToMarker } from "../../../data/mappers/mapShopToMarker";
export default function ShopInfoScreen() {
    const route = useRoute();
    const theme = useTheme();
    const navigation = useNavigation();
    const shopInfo = route.params;
    const modalRef = useRef(null);
    const [shopGames, setShopGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const handleCardPress = (game) => {
        setSelectedGame(game);
        modalRef.current?.open();
    };
    useEffect(()=>{
        navigation.setOptions({ title: shopInfo.title });
    }, []);
    useFocusEffect(()=>{
        async function loadGames(){
            const games = await GameService.getGamesByIds(shopInfo.games);
            setShopGames(games);
        }
        loadGames();
    });
    const styles = StyleSheet.create({
        text: {
            color: theme.colors.onSurface,
        },
        shopInfoPoint: {
            fontSize: 16,
        },
        pointHeader: {
            fontSize: 20, 
            marginVertical: 10
        }
    });
    return (
        <>
            <ScrollView contentContainerStyle={{ width: "100%", justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <View style={{width: "100%", aspectRatio: 16/9}}>
                    <Image source={{uri: shopInfo.image}} resizeMode="cover" style={{ width: "100%", height: "100%"}}/>
                </View>
                <View style={{margin: 20}}>
                    <Text variant="bold" style={[styles.text, { fontSize: 26, marginBottom: 10}]}>{shopInfo.title}</Text>
                    <Text variant="bold" style={[styles.text, styles.shopInfoPoint]}>Address: <Text variant="regular" style={styles.text}>{shopInfo.address}</Text></Text>
                    <Text variant="bold" style={[styles.text, styles.shopInfoPoint]}>Rating: 
                        <Text variant="regular" style={styles.text}>
                            {` ${shopInfo.rating}`}
                        </Text>
                        <Icon name="star" color={theme.colors.onSurface} size={16}/>
                    </Text>
                    <Text variant="bold" style={styles.pointHeader}>Description:</Text>
                    <Text variant="regular" style={{fontSize: 16}}>{shopInfo.description}</Text>
                    <Text variant="bold" style={styles.pointHeader}>Location:</Text>
                    <MapWidget
                        markers={[mapShopToMarker(shopInfo)]}
                    />
                    <Text variant="bold" style={styles.pointHeader}>Available games:</Text>
                    <GamesList data={shopGames} onCardPress={handleCardPress}/>
                </View>
            </ScrollView>
            <GameInfoSheet ref={modalRef} game={selectedGame} />
        </>
    );
}
