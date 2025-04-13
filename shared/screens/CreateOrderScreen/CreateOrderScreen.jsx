import React, { useState } from 'react';
import { View, Pressable, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text, TextInput, useTheme, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import CartService from '../../../data/Services/CartService';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import CartGoodsList from '../../components/CartGoodsList/CartGoodsList';
import OrderService from '../../../data/Services/OrderService';

export default function CreateOrderScreen() {
  const [goods, setGoods] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();
  const theme = useTheme();
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [name, setName] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  async function loadCart(){
    const cart = await CartService.getUserCart();
    setGoods(cart);
    setTotalPrice(cart?.reduce((sum, item) => sum + item.price * item.quantity, 0));
  }
  useFocusEffect(() => {
    loadCart();
  });
  async function handleCartRemove(id) {
    await CartService.removeFromCart(id);
    await loadCart();
  }
  async function handleSubmitOrder(){
    const goodIds = goods.map(item => item.id);
    await OrderService.createOrder({
      name,
      deliveryMethod,
      date,
      time,
      total: totalPrice,
      items: goodIds
    });
    await CartService.clearCart();
    navigation.goBack();
  }
  const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontWeight: 'bold', marginBottom: 20 },
    switchWrapper: {
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 30,
      overflow: 'hidden',
      marginBottom: 20
    },
    switchButton: {
      flex: 1,
      padding: 10,
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: theme.colors.secondaryContainer,
    },
    switchActive: {
      backgroundColor: theme.colors.primary
    },
    switchText: {
      color: theme.colors.onPrimary,
    },
    input: {
      backgroundColor: theme.colors.secondaryContainer,
      borderRadius:8,
      fontSize: 16,
      marginBottom: 20,
      color: theme.colors.onSurfaceVariant,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 10,
      marginBottom: 14
    },
    selector: {
      color: '#e91e63',
      fontWeight: 'bold',
      fontSize: 14
    },
    summaryLabel: {
      fontSize: 16,
      marginBottom: 8
    },
    summaryBox: {
      height: 100,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      justifyContent: 'center',
    },
    footer: {
      padding: 16,
      borderTopWidth: 1,
      borderColor: '#eee',
      backgroundColor: '#fff'
    }
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.switchWrapper}>
          <Pressable
            style={[
              styles.switchButton,
              deliveryMethod === 'delivery' && styles.switchActive
            ]}
            onPress={() => setDeliveryMethod('delivery')}
          >
            <Icon name="bike" size={16}/>
            <Text variant='bold' style={[styles.switchText]}>Delivery</Text>
          </Pressable>
          <Pressable
            style={[
              styles.switchButton,
              deliveryMethod === 'pickup' && styles.switchActive
            ]}
            onPress={() => setDeliveryMethod('pickup')}
          >
            <Icon name="human-greeting-variant" size={16}/>
            <Text variant='bold' style={[styles.switchText]}>Pickup</Text>
          </Pressable>
        </View>

        <TextInput
          mode="outlined"
          outlineColor={theme.colors.secondaryContainer}
          style={styles.input}
          placeholder="Contact Name"
          value={name}
          onChangeText={setName}
          contentStyle={{
            fontFamily: 'FiraCode-Regular',
            fontSize: 16,
          }}
          
        />

        <View style={styles.row}>
          <Pressable onPress={() => setShowDatePicker(true)} style={{paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.colors.primary, borderRadius: 25}}>
            <Text variant='bold' style={{color: theme.colors.onPrimary}}>
              Select Date
            </Text>
          </Pressable>
          <Pressable onPress={() => setShowTimePicker(true)} style={{paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.colors.primary, borderRadius: 25}}>
            <Text variant='bold' style={{color: theme.colors.onPrimary}}>
              Select Time
            </Text>
          </Pressable>
        </View>

        {showDatePicker && (
          <DateTimePicker
            mode="date"
            value={date || new Date()}
            onChange={(e, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
            accentColor={theme.colors.primary}
            themeVariant="dark"
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            mode="time"
            value={time || new Date()}
            onChange={(e, selectedTime) => {
              setShowTimePicker(false);
              if (selectedTime) setTime(selectedTime);
            }}
            accentColor={theme.colors.primary}
            themeVariant="dark"
          />
        )}
        <Text variant='bold' style={styles.summaryLabel}>Order Summary</Text>
        <CartGoodsList goods={goods} onCartRemove={async(id) => await handleCartRemove(id)}/>

      </ScrollView>
      <Pressable onPress={() => handleSubmitOrder()} style={{position: "absolute", bottom: 20, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.colors.primary, borderRadius: 25,  alignSelf: "center"}}>
        <Text variant='bold' style={{color: theme.colors.onPrimary}}>
          Submit Order - {totalPrice}₸
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}