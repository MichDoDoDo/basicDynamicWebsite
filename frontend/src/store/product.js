import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.description ||
      !newProduct.image||
      !newProduct.category ||
      !newProduct.quantity
    ) {
      return { success: false, message: "Please fill in all feilds" };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    console.log("passed")
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product Createed Successfully" };
  },

  quryProduct: async () =>{
    const res = await fetch("/api/products");
    const data = await res.json();
    set({products: data.data})
  },
  
}));
