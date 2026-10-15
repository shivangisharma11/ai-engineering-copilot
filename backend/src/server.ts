import express from "express";
import { db, pool } from "./db/index.js";
import { users } from "./db/schema.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/db-test", async (_req, res) => {
  try {
    const result = await db.select().from(users).limit(5);
    res.json({ connected: true, users: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ connected: false });
  }
});

const PORT = 5000;

app.get("/", (req,res) => {
    res.json({
        message:"AI Engineering Copilot API is running",
    })
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})