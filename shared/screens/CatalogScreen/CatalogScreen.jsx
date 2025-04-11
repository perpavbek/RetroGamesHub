import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useTheme } from 'react-native-paper';
import HorizontalGamesScroll from "../../components/HorizontalGamesScroll/HorizontalGamesScroll";
import GameInfoSheet from "../../components/GameInfoSheet/GameInfoSheet";
import { games } from "../../../data/games";

const nesGames = games.filter(game => game.platform === "NES");
const snesGames = games.filter(game => game.platform === "SNES");

export default function CatalogScreen() {
    const theme = useTheme();
    const modalRef = useRef(null);
    const [selectedGame, setSelectedGame] = useState(null);

    const handleCardPress = (game) => {
      setSelectedGame(game);
      modalRef.current?.open();
    };

    return (
      <>
        <ScrollView contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center'}}>
          <HorizontalGamesScroll data={nesGames} blockTitle="NES Games" onCardPress={handleCardPress}/>
          <HorizontalGamesScroll data={snesGames} blockTitle="SNES Games" onCardPress={handleCardPress}/>
        </ScrollView>
        <GameInfoSheet ref={modalRef} game={selectedGame} />
      </>
    );
  }