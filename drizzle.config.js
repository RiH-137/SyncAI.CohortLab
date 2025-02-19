import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "configs/schema.js",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_KZaw1ch5kdSF@ep-young-boat-a5prdly6-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'
  }

});
