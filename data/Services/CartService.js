import {
    collection,
    doc,
    setDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    serverTimestamp,
  } from 'firebase/firestore';
  import { db } from '../../config/firebaseConfig';
  
  const CartService = {
    async addToCart(gameId, quantity = 1) {
      try {
        const userId = "eXBDOneb9LyAtmcMBeIi";
        const cartRef = doc(db, 'users', userId, 'cart', gameId);
        await setDoc(cartRef, {
          quantity,
          addedAt: serverTimestamp(),
        }, { merge: true });
      } catch (error) {
        console.error('Add to cart error:', error);
        throw error;
      }
    },
  
    async getUserCart(userId = "eXBDOneb9LyAtmcMBeIi") {
      try {
        const cartSnapshot = await getDocs(collection(db, 'users', userId, 'cart'));
        return cartSnapshot.docs.map((doc) => ({
          gameId: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error('Cart getting error:', error);
        throw error;
      }
    },
  
    async removeFromCart(userId = "eXBDOneb9LyAtmcMBeIi", gameId) {
      try {
        const cartRef = doc(db, 'users', userId, 'cart', gameId);
        await deleteDoc(cartRef);
      } catch (error) {
        console.error('Deleting from cart error:', error);
        throw error;
      }
    },
  
    async updateQuantity(userId = "eXBDOneb9LyAtmcMBeIi", gameId, quantity) {
      try {
        const cartRef = doc(db, 'users', userId, 'cart', gameId);
        await updateDoc(cartRef, {
          quantity,
        });
      } catch (error) {
        console.error('Quantity updating error:', error);
        throw error;
      }
    },
  
    async clearCart(userId = "eXBDOneb9LyAtmcMBeIi") {
      try {
        const cartSnapshot = await getDocs(collection(db, 'users', userId, 'cart'));
        const deletePromises = cartSnapshot.docs.map((doc) =>
          deleteDoc(doc.ref)
        );
        await Promise.all(deletePromises);
      } catch (error) {
        console.error('Cart cleaning error:', error);
        throw error;
      }
    },
  };
  
  export default CartService;
  