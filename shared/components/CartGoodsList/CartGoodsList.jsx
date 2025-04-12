import { FlatList, View } from "react-native";
import CartListCard from "../CartListCard/CartlistCard";

export default function CartGoodsList({goods}){
    return(
        <View style={{
            width: "100%",
            alignItems: "stretch",
            padding: 20
        }}>
            <FlatList
            data={goods}
            keyExtractor={(item) => item.gameId}
            horizontal
            renderItem={({ item }) => (
                <CartListCard good={item}/>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: "column", alignItems: "stretch", marginTop: 20, width: "100%", gap: 15}}
            />
        </View>
    );
}