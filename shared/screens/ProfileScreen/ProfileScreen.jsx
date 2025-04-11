import React from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { user } from "../../../data/user"; 

export default function ProfileScreen() {
    const theme = useTheme();
    const styles = StyleSheet.create({
        text: {
            color: theme.colors.onSurface,
            textAlign: "center"
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
        <ScrollView contentContainerStyle={{ width: "100%", justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 30}}>
            <View style={{width: 100, aspectRatio: 1, alignSelf: "center"}}>
                <Image source={user.avatar} resizeMode="cover" style={{ width: "100%", height: "100%",  borderRadius: 50}}/>
            </View>
            <View style={{margin: 20}}>
                <Text variant="bold" style={[styles.text, { fontSize: 26, marginBottom: 10}]}>{user.username}</Text>
                <Text variant="bold" style={[styles.text, styles.shopInfoPoint]}>Email: <Text variant="regular" style={styles.text}>{user.email}</Text></Text>
            </View>
        </ScrollView>
    );
}