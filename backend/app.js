import express from "express";
import { connectDataBase } from "./DB/db.js";
import router from "./routes/Product_Routes.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();
app.use(express.json());

app.use("/api/products", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`localhost:${PORT} has been started hello`);
  if (connectDataBase()) {
    console.log("Database connection established");
  }
});
