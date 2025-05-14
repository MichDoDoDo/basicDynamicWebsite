import express from "express";
import { connectDataBase } from "./DB/db.js";
import router from "./routes/Product_Routes.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/api/products",router)



app.listen(PORT, () =>{
    console.log(`localhost:${PORT} has been started hello`);
    if(connectDataBase()){
        console.log("Database connection established");
    }    
});
