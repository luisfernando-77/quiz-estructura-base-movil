import { database } from "../../infrastructure/database/sqlite";

export function saveUser(name: string, email: string) {
  database.runSync(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
}