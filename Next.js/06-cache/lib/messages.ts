import sql from 'better-sqlite3';

const db = new sql('messages.db');

export interface MessageType {
  id: number;
  text: string
}

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message: string) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

export function getMessages(): MessageType[] {
  console.log('Fetching messages from db');
  return db.prepare('SELECT * FROM messages').all() as MessageType[];
}
