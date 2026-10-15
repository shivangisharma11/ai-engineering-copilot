
import "dotenv/config";
import pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 5000,
});

try {
  await client.connect();
  console.log("Database connected!");

const result = await client.query(
  "SELECT * FROM drizzle.__drizzle_migrations"
);

console.log("Migration history:", result.rows);

  console.log("Tables:", result.rows);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  await client.end().catch(() => {});
}
