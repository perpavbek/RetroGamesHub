import React, { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useTheme } from 'react-native-paper';
import HorizontalGamesScroll from "../../components/HorizontalGamesScroll/HorizontalGamesScroll";
import GameInfoSheet from "../../components/GameInfoSheet/GameInfoSheet";
import GameService from "../../../data/Services/GameService"

export default function CatalogScreen() {
    const [games, setGames] = useState([]);
    const theme = useTheme();
    const modalRef = useRef(null);
    const [selectedGame, setSelectedGame] = useState(null);

    const handleCardPress = (game) => {
      setSelectedGame(game);
      modalRef.current?.open();
    };

    useEffect(() => {
      async function loadGames() {
        try {
          const allGames = await GameService.getAllGames();
          setGames(allGames);
        } catch (err) {
          console.error("Games loading error:", err);
        }
      }
    
      loadGames();
    }, []);
    

    return (
      <>
        <ScrollView contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 30}}>
          <HorizontalGamesScroll data={games.filter((game) => game.platform === "NES")} blockTitle="NES Games" onCardPress={handleCardPress}/>
          <HorizontalGamesScroll data={games.filter((game) => game.platform === "SNES")} blockTitle="SNES Games" onCardPress={handleCardPress}/>
        </ScrollView>
        <GameInfoSheet ref={modalRef} game={selectedGame} />
      </>
    );
  }