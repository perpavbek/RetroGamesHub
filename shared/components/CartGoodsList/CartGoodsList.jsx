import { FlatList, View } from "react-native";
import CartListCard from "../CartListCard/CartlistCard";

export default function CartGoodsList({goods, onCartRemove}){
    return(
        <View style={{
            width: "100%",
            alignItems: "stretch",
        }}>
            <FlatList
            data={goods}
            keyExtractor={(item) => item.gameId}
            horizontal
            renderItem={({ item }) => (
                <CartListCard good={item} onCartRemove={onCartRemove}/>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: "column", alignItems: "stretch", width: "100%", gap: 15}}
            />
        </View>
    );
}