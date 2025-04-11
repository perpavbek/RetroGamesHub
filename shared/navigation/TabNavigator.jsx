import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './HomeStack';
import CatalogStack from './CatalogStack';
import MyGamesStack from './MyGamesStack';
import SettingsStack from './SettingsStack';
import { useTheme } from 'react-native-paper';
import MyCartStack from './MyCartStack';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator({}) {
  const currentTheme = useTheme();
  return (
    <Tab.Navigator
      activeColor={currentTheme.colors.primary}
      inactiveColor={currentTheme.colors.onSurfaceVariant}
      barStyle={{ backgroundColor: currentTheme.colors.surface }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <Icon name="home" color={color} size={20} />,
            }}
        />
        <Tab.Screen
            name="Catalog"
            component={CatalogStack}
            options={{
            tabBarLabel: 'Catalog',
            tabBarIcon: ({ color }) => <Icon name="format-list-bulleted" color={color} size={20} />,
            }}
        />
        <Tab.Screen
            name="MyGames"
            component={MyGamesStack}
            options={{
            tabBarLabel: 'My Games',
            tabBarIcon: ({ color }) => <Icon name="animation" color={color} size={20} />,
            }}
        />
        <Tab.Screen
            name="MyCart"
            component={MyCartStack}
            options={{
            tabBarLabel: 'My Cart',
            tabBarIcon: ({ color }) => <Icon name="cart" color={color} size={20} />,
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingsStack}
            options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => <Icon name="cog" color={color} size={20} />,
            }}
        />
    </Tab.Navigator>
  );
}
