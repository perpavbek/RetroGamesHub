import {
    collection,
    doc,
    getDocs,
    getDoc,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc
  } from 'firebase/firestore';
  import { db } from '../../config/firebaseConfig';
  
  const gamesCollection = collection(db, 'games');
  
  const GameService = {
    async getAllGames() {
      try {
        const snapshot = await getDocs(gamesCollection);
        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error('Games getting error:', error);
        throw error;
      }
    },
  
    async getGameById(id) {
      try {
        const ref = doc(db, 'games', id);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          return { id: snapshot.id, ...snapshot.data() };
        } else {
          return null;
        }
      } catch (error) {
        console.error(`Getting game with id ${id} error:`, error);
        throw error;
      }
    },

    async addGame(game) {
      try {
        const docRef = await addDoc(gamesCollection, game);
        return { id: docRef.id, ...game };
      } catch (error) {
        console.error('Game adding error:', error);
        throw error;
      }
    },
  
    async updateGame(id, updatedFields) {
      try {
        const ref = doc(db, 'games', id);
        await updateDoc(ref, updatedFields);
        return true;
      } catch (error) {
        console.error('Game updating error:', error);
        throw error;
      }
    },
  
    async deleteGame(id) {
      try {
        await deleteDoc(doc(db, 'games', id));
        return true;
      } catch (error) {
        console.error('Game deleting error:', error);
        throw error;
      }
    }
  };
  
  export default GameService;
  