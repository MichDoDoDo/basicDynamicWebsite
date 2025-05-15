import express from "express";
import { connectDataBase } from "./DB/db.js";
import router from "./routes/Product_Routes.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
const __dirname = path.resolve();

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
