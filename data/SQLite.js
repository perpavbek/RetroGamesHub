import * as SQLite from 'expo-sqlite';

class SQLiteDB {
  constructor() {
    this.db = null;
  }

  async init() {
    if (this.db) return this.db;

    try {
      this.db = await SQLite.openDatabaseAsync('app.db');

      await this.db.execAsync(`
        CREATE TABLE IF NOT EXISTS Favorites (
          id TEXT PRIMARY KEY NOT NULL
        );
      `);

      return this.db;
    } catch (err) {
      console.error('Database initialization error: ', err);
      throw err;
    }
  }

  getDB() {
    if (!this.db) {
      throw new Error('Database is not initialized');
    }
    return this.db;
  }
}

const sqlite = new SQLiteDB();
export default sqlite;
