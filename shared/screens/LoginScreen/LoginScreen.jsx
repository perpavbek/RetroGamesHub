import { Pressable, View } from "react-native";
import { Text, TextInput, useTheme } from "react-native-paper";

export default function LoginScreen({onLogin}) {
    const theme = useTheme();
    return(
        <View style={{flex: 1, width: "100%", alignItems: "center", justifyContent: "center"}}>
            <View style={{width: "70%", gap: 20}}>
                <Text variant="bold" style={{fontSize: 40, textAlign: "center"}}>Log In</Text>
                <TextInput
                    mode="outlined"
                    outlineColor={theme.colors.secondaryContainer}
                    placeholder="Username"
                    style={{width: "100%", borderRadius: 8}}
                    contentStyle={{
                    fontFamily: 'FiraCode-Regular',
                    fontSize: 16,
                    }}   
                />
                <TextInput
                    mode="outlined"
                    outlineColor={theme.colors.secondaryContainer}
                    placeholder="Password"
                    style={{width: "100%", borderRadius: 8}}
                    contentStyle={{
                    fontFamily: 'FiraCode-Regular',
                    fontSize: 16,
                    }}   
                />
                <Pressable onPress={() => onLogin()} style={{backgroundColor: theme.colors.primary, paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8}}>
                    <Text variant="bold" style={{color: theme.colors.onPrimary, textAlign: "center", fontSize: 20}}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    );
}