import { mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const databasePath = resolve(rootDir, process.env.SQLITE_PATH ?? "data/orders.db");
const schemaPath = resolve(rootDir, "database/schema.sql");

mkdirSync(dirname(databasePath), { recursive: true });

const database = new DatabaseSync(databasePath);

try {
  database.exec(readFileSync(schemaPath, "utf8"));
  console.log(`Database SQLite siap: ${databasePath}`);
} finally {
  database.close();
}
