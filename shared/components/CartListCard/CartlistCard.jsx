import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import GameService from "../../../data/Services/GameService";

export default function CartListCard({good}){
    const theme = useTheme();
    const [game, setGame] = useState(null);
    useEffect(() => {
        async function loadGame() {
            const loadedGame = await GameService.getGameById(good.gameId);
            setGame(loadedGame);
        }
        loadGame();
    }, []);
    return(
        game && 
        <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center", padding: 20, borderRadius: 15, backgroundColor: theme.colors.surface}}>
            <Text variant="bold" style={{flex: 0.9}}>{game.title}</Text>
            <Text variant="bold" style={{flex: 0.1, textAlign: "center"}}>{good.quantity}</Text>
        </View>
    );
}