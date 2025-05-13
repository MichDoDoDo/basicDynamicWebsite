import express from "express";
import { connectDataBase } from "./DB/db.js";
import router from "./routes/Product_Routes.js"

const app = express();
app.use(express.json());
app.use("/api/products",router)


app.listen(8000, () =>{
    console.log("localhost:5000 has been started hello");
    if(connectDataBase()){
        console.log("Database connection established");
    }    
});
