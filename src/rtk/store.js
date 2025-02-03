import { configureStore } from "@reduxjs/toolkit";
import ProductssReducre from "./Slices/ProductsSlice";
import cartReducer from "./Slices/cartSlice";
export const store = configureStore({
  reducer: {
    products: ProductssReducre,
    cart: cartReducer,
  },
});
