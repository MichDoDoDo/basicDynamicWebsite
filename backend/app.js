import express from "express";
import { connectDataBase } from "./DB/db.js";
import Products from "./DBModels/Product_Model.js";
import mongoose from "mongoose";
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

app.get("/api/products", async(req,res) => {
    try{
        const product = await Products.find({});
        res.status(200).json({success:true, data:product})
        
    }catch(error){
        
        res.status(500).json({message: "Error getting products", error});
    }
});
app.get("/api/products/:id", async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:`not valid id ${id}`});
    }
    try{
        const product = await Products.findById(id);
        if(!product)
        {
            return res.status(404).json({message:`Could not find item with ${id}`})
        }
        res.status(200).json({success:true, message:`Found item with ${id}`, data:product})
    }catch(error){
        res.status(500).json({message:"Server Error"})

    }
});

app.delete("/api/products/:id", async(req,res) => {
    const {id} = req.params;
    try{
        const product = await Products.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully", product});
    }
    catch(error){
        res.status(500).json({message: "Error deleting product", error});
    }   
});

app.put("/api/products/:id", async(req,res) => {

    const {id} = req.params;
    const productInfo = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:`not valid id ${id}`});
    }
    try{
        const updatedProduct = await Products.findByIdAndUpdate(id, productInfo,{new:true});
        res.status(200).json({success: true, data: updatedProduct})
    }
    catch(error)
    {
        res.status(500).json({success: false, message:"Internal server error"})
    }

});

app.listen(8000, () =>{
    console.log("localhost:5000 has been started hello");
    if(connectDataBase()){
        console.log("Database connection established");
    }    
});
