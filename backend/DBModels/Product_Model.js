import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const products = mongoose.model("Products", productsSchema);

export default products;