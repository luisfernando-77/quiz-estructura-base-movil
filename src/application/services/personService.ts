import { database } from "../../infrastructure/database/sqlite";

export function savePerson(name: string, phone: string) {
  database.runSync(
    "INSERT INTO persons (name, phone) VALUES (?, ?)",
    [name, phone]
  );
}
