import express from "express";
import { createProduct, getAllProducts, getProductById, deleteProduct, putProduct} from "../controller/Products_Controller.js";

const router = express.Router();
router.post("/", createProduct);
router.get("/", getAllProducts );
router.get("/:id", getProductById);
router.delete("/:id",deleteProduct);
router.put("/:id",putProduct );

export default router;

