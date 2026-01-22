import { drizzle as drizzleSqlite } from "drizzle-orm/better-sqlite3";
import { drizzle as drizzleLibsql } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import Database from "better-sqlite3";
import * as schema from "./schema";

const useLocal = process.env.USE_LOCAL === "true";

function createDb() {
  if (useLocal) {
    const sqlite = new Database("sqlite.db");
    return drizzleSqlite(sqlite, { schema });
  }

  const client = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  return drizzleLibsql(client, { schema });
}

export const db = createDb();
