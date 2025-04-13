import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';
import GamesList from "../../components/GamesList/GamesList";
import GameService from "../../../data/Services/GameService";
import FavoritesService from "../../../data/Services/FavoritesService";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import GameInfoSheet from "../../components/GameInfoSheet/GameInfoSheet";

export default function MyGamesScreen() {
  const theme = useTheme();
  const modalRef = useRef(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [favoriteGames, setFavoriteGames] = useState([]);
  const loadGames = async () => {
    try {
      const gameIds = await FavoritesService.getFavorites();
      const games = await GameService.getGamesByIds(gameIds);
      setFavoriteGames(games);
    } catch (err) {
      console.error("Favorites loading error: ", err);
    }
  };
  const handleCardPress = (game) => {
    setSelectedGame(game);
    modalRef.current?.open();
  };
  useFocusEffect(
    useCallback(() => {
      loadGames();
    }, [])
  );  
  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20, gap: 15}}>
        {favoriteGames.length !== 0 ? <GamesList data={favoriteGames} onCardPress={handleCardPress} onRemoveFavorite={loadGames} />
        : <Text variant="bold" style={{margin: "auto"}}>There isn't any games in your collection</Text>}
      </ScrollView>
      <GameInfoSheet ref={modalRef} game={selectedGame}/>
    </>
  );
}