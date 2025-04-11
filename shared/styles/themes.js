import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

const baseColor = '#00c89c';

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: baseColor,
    background: '#ffffff',
    surface: '#f6fffd',
    secondaryContainer: "#b4f5e7",
    onSurfaceVariant: "#49655f",
    onSurface: "#009574"
  },
  fonts: {
    regular: { fontFamily: 'FiraCode-Regular', fontWeight: 'normal' },
    medium: { fontFamily: 'FiraCode-Medium', fontWeight: 'normal' },
    bold: { fontFamily: 'FiraCode-Bold', fontWeight: 'normal' },
    labelMedium: { fontFamily: 'FiraCode-Regular', fontWeight: 'normal' },
    labelRegular: { fontFamily: 'FiraCode-Light', fontWeight: 'normal' }
  }
};

export const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: baseColor,
    background: '#121212',
    surface: '#0a1412',
    secondaryContainer: "#003025",
    onPrimary: "#FFFFFF",
    onSurfaceVariant: "#739f95",
    onSurface: '#00c89c',
  },
  fonts: {
    regular: { fontFamily: 'FiraCode-Regular', fontWeight: 'normal' },
    medium: { fontFamily: 'FiraCode-Medium', fontWeight: 'normal' },
    bold: { fontFamily: 'FiraCode-Bold', fontWeight: 'normal' },
    labelMedium: { fontFamily: 'FiraCode-Regular', fontWeight: 'normal' },
    labelRegular: { fontFamily: 'FiraCode-Light', fontWeight: 'normal' }
  },
};