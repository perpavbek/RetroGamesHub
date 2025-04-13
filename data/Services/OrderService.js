import {
    collection,
    doc,
    setDoc,
    getDocs,
    query,
    where,
    deleteDoc,
    updateDoc,
    serverTimestamp
  } from 'firebase/firestore';
  import { db } from '../../config/firebaseConfig';
  
  const ordersCollection = collection(db, 'orders');
  
  const OrderService = {
    async createOrder(orderData) {
      try {
        const userId = "eXBDOneb9LyAtmcMBeIi";
        const orderRef = doc(ordersCollection);
        await setDoc(orderRef, {
          userId,
          ...orderData,
          createdAt: serverTimestamp()
        });
        return orderRef.id;
      } catch (error) {
        console.error('Error creating order:', error);
        throw error;
      }
    },
  
    async getOrdersByUser() {
      try {
        const userId = "eXBDOneb9LyAtmcMBeIi";
        const q = query(ordersCollection, where('userId', '==', userId));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error('Error fetching user orders:', error);
        throw error;
      }
    },
  
    async getAllOrders() {
      try {
        const snapshot = await getDocs(ordersCollection);
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error('Error fetching all orders:', error);
        throw error;
      }
    },
  
    async updateOrder(orderId, updates) {
      try {
        const ref = doc(db, 'orders', orderId);
        await updateDoc(ref, updates);
      } catch (error) {
        console.error('Error updating order:', error);
        throw error;
      }
    },
  
    async deleteOrder(orderId) {
      try {
        await deleteDoc(doc(db, 'orders', orderId));
      } catch (error) {
        console.error('Error deleting order:', error);
        throw error;
      }
    }
  };
  
  export default OrderService;
  