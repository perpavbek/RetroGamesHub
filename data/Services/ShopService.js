import {
    collection,
    doc,
    getDocs,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
  } from 'firebase/firestore';
  import { db } from '../../config/firebaseConfig';
  
  const shopsCollection = collection(db, 'shops');
  
  const ShopService = {
    async getAllShops() {
      try {
        const snapshot = await getDocs(shopsCollection);
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error('Error getting shops:', error);
        throw new Error('Failed to load shops');
      }
    },
  
    async getShopById(id) {
      try {
        const ref = doc(db, 'shops', String(id));
        const snap = await getDoc(ref);
        return snap.exists() ? { id: snap.id, ...snap.data() } : null;
      } catch (error) {
        console.error(`Error getting shop with ID ${id}:`, error);
        throw new Error('Failed to load shop');
      }
    },
  
    async addShop(shop) {
      try {
        const ref = doc(db, 'shops', String(shop.id));
        const imageUri = shop.image?.uri || shop.image;
  
        const shopData = {
          ...shop,
          image: imageUri,
          rating: parseFloat(shop.rating),
        };
  
        await setDoc(ref, shopData);
      } catch (error) {
        console.error('Error adding shop:', error);
        throw new Error('Failed to add shop');
      }
    },
  
    async updateShop(id, updates) {
      try {
        const ref = doc(db, 'shops', String(id));
        await updateDoc(ref, updates);
      } catch (error) {
        console.error(`Error updating shop ${id}:`, error);
        throw new Error('Failed to update shop');
      }
    },
  
    async deleteShop(id) {
      try {
        const ref = doc(db, 'shops', String(id));
        await deleteDoc(ref);
      } catch (error) {
        console.error(`Error deleting shop ${id}:`, error);
        throw new Error('Failed to delete shop');
      }
    },
  };
  
  export default ShopService;
  