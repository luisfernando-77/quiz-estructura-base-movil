import { database } from "../../infrastructure/database/sqlite";

export function saveProduct(name: string, price: number) {
  database.runSync(
    "INSERT INTO products (name, price) VALUES (?, ?)",
    [name, price]
  );
}