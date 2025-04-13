import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import TabNavigator from "../navigation/TabNavigator";
import { ThemeProvider, useThemeToggle } from '../context/ThemeContext';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginStack from "../navigation/LoginStack";
import sqlite from '../../data/SQLite';

function Main() {
  const { isDarkMode, currentTheme } = useThemeToggle();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={currentTheme}>
      {isAuthenticated ? 
        <BottomSheetModalProvider>
          <NavigationContainer theme={isDarkMode ? NavigationDarkTheme : DefaultTheme}>
            <TabNavigator currentTheme={currentTheme} /> 
          </NavigationContainer>
        </BottomSheetModalProvider>
      : <LoginStack onLogin={()=>setIsAuthenticated(true)}/>}
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'FiraCode-Light': require('../../assets/fonts/FiraCode-Light.ttf'),
    'FiraCode-Regular': require('../../assets/fonts/FiraCode-Regular.ttf'),
    'FiraCode-Medium': require('../../assets/fonts/FiraCode-Light.ttf'),
    'FiraCode-Bold': require('../../assets/fonts/FiraCode-Bold.ttf'),
  });
  
  useEffect(() => {
    sqlite.init();
  }, []);

  if (!fontsLoaded) return null;
  return (
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
  );
}
