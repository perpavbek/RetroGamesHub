import { useTheme } from 'react-native-paper';

export default function useStackHeaderStyles() {
  const theme = useTheme();

  return {
    headerStyle: {
      backgroundColor: theme.colors.surface,
      height: 100,
    },
    headerTintColor: theme.colors.onSurface,
    headerTitleStyle: {
      fontFamily: 'FiraCode-Bold',
      fontSize: 20,
    },
    headerTitleAlign: 'left',
  };
}
