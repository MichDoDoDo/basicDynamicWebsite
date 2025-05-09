import express from "express";
import { connectDataBase } from "./DB/db.js";
import Products from "./models/Product_Model.js";
const app = express();



app.post("api/products", async(req,res) => {
    const product = req.body;
    if (product.name && product.price && product.description && product.quantity && product.category && product.image){
        res.status(201).json({message: "All Product credidnatls are correct", product});
    }else{ 
        res.status(400).json({message: "Invalid product data"});
    }
    const addNewProduct = new Products(product);

    try{
        await addNewProduct.save();
        res.status(201).json({message: "Product created successfully", product});
    }catch(error){
        res.status(500).json({message: "Error creating product", error.message});
    }
});
app.listen(5000, () =>{
    console.log("localhost:5000 has been started hello");
    if(connectDataBase()){
        console.log("Database connection established");
    }    
});
