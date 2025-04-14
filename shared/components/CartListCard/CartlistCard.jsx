import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function CartListCard({ good, onCartRemove }) {
  const theme = useTheme();

  const renderLeftActions = () => (
    <View style={[styles.actionContainer, { backgroundColor: theme.colors.error }]}>
      <Icon name="cart-remove" size={24} color={theme.colors.onError} />
    </View>
  );

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={renderLeftActions}
        onSwipeableLeftOpen={() => onCartRemove(good.gameId)}
      >
        <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Text variant="bold" style={[styles.quantity, { backgroundColor: theme.colors.secondaryContainer }]}>
            x{good.quantity}
          </Text>
          <Text variant="bold" style={styles.title} numberOfLines={1}>
            {good.title}
          </Text>
          <Icon
            name="cart-remove"
            size={24}
            color={theme.colors.onPrimary}
            onPress={() => onCartRemove(good.gameId)}
            style={[styles.icon, { backgroundColor: theme.colors.primary }]}
          />
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  quantity: {
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    padding: 8,
    borderRadius: 4,
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    marginVertical: 4,
    borderRadius: 8,
  },
});
