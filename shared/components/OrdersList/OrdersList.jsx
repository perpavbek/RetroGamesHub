import { FlatList, View } from "react-native";
import OrderListCard from "../OrderListCard/OrderListCard";

export default function OrdersList({orders}){
    return(
        <View style={{
            width: "100%",
            alignItems: "stretch",
        }}>
            <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <OrderListCard order={item}/>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: "column", alignItems: "stretch", width: "100%", gap: 15}}
            />
        </View>
    );
}