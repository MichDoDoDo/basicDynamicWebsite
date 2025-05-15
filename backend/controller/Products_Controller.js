import Products from "../DBModels/Product_Model.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
  const product = req.body;
  if (
    !product.name ||
    !product.price ||
    !product.description ||
    !product.quantity ||
    !product.category ||
    !product.image
  ) {
    return res.json({ success: false, message: "Invalid product data" });
  }
  const addNewProduct = new Products(product);

  try {
    const savedProduct = await addNewProduct.save();
    res.status(201).json({
      success: true,
      data: savedProduct,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating product", error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const product = await Products.find({});
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ message: "Error getting products", error });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: `not valid id ${id}` });
  }
  try {
    const product = await Products.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: `Could not find item with ${id}` });
    }
    res
      .status(200)
      .json({ success: true, message: `Found item with ${id}`, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const putProduct = async (req, res) => {
  const { id } = req.params;
  const productInfo = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: `not valid id ${id}` });
  }
  try {
    const updatedProduct = await Products.findByIdAndUpdate(id, productInfo, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
