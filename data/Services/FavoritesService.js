import sqlite from '../SQLite';

const FavoritesService = {
  async addFavorite(id) {
    const db = await sqlite.init();
    await db.runAsync(
      `INSERT OR IGNORE INTO Favorites (id) VALUES (?);`,
      [id]
    );
  },
  
  async removeFavorite(id) {
    const db = await sqlite.init();
    await db.runAsync(
      `DELETE FROM Favorites WHERE id = ?;`,
      [id]
    );
  },  

  async getFavorites() {
    const db = await sqlite.init();
    const results = await db.getAllAsync(`SELECT id FROM Favorites`);
    const favorites = results.map(row => row.id);
    return favorites;
  },

  async isFavorite(id) {
    const db = await sqlite.init();
    const result = await db.getFirstAsync(
      `SELECT id FROM Favorites WHERE id = ?;`,
      [id]
    );
    return !!result;
  }
};

export default FavoritesService;
