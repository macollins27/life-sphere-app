import path from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

// Load .env from project root
dotenv.config({ path: path.join(__dirname, "..", ".env") });

export default defineConfig({
  schema: path.join(__dirname, "schema.prisma"),
});
