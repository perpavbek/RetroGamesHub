import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { useThemeToggle } from '../context/ThemeContext';

const Stack = createStackNavigator();

export default function LoginStack({ onLogin }) {
    const { isDarkMode, currentTheme } = useThemeToggle();
    return (
        <NavigationContainer theme={isDarkMode ? NavigationDarkTheme : DefaultTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login">
                    {() => <LoginScreen onLogin={onLogin} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}