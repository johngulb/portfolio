import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const useLocal = process.env.USE_LOCAL === "true";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: useLocal ? "sqlite" : "turso",
  dbCredentials: useLocal
    ? {
        url: "./dev.sqlite3",
      }
    : {
        url: process.env.TURSO_DATABASE_URL!,
        authToken: process.env.TURSO_DATABASE_AUTH_TOKEN,
      },
});
