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
  import GameService from './GameService';
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
        const cartItems = await Promise.all(
          cartSnapshot.docs.map(async (doc) => {
            const gameId = doc.id;
            const cartData = doc.data();
  
            const game = await GameService.getGameById(gameId);
  
            return {
              gameId,
              quantity: cartData.quantity || 1,
              ...game,
            };
          })
        );
  
        return cartItems;
      } catch (error) {
        console.error('Cart getting error:', error);
        throw error;
      }
    },
  
    async removeFromCart(gameId) {
      try {
        const userId = "eXBDOneb9LyAtmcMBeIi";
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
  
    async clearCart() {
      try {
        const userId = "eXBDOneb9LyAtmcMBeIi";
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
  