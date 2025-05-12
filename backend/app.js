import express from "express";
import { connectDataBase } from "./DB/db.js";
import Products from "./DBModels/Product_Model.js";
const app = express();

app.use(express.json());

app.post("/api/products", async(req,res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.description || !product.quantity || !product.category || !product.image){
        return res.json({message: "Invalid product data", product: product  });
    }
    const addNewProduct = new Products(product);

    try{
        await addNewProduct.save();
        res.status(201).json({message: "Product created successfully", product});
    }catch(error){
        res.status(500).json({message: "Error creating product", error});
    }
});
app.listen(5000, () =>{
    console.log("localhost:5000 has been started hello");
    if(connectDataBase()){
        console.log("Database connection established");
    }    
});
