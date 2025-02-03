import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("cart")) || [];
export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteFromCart: (state, action) => {
      const newState = state.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    clear: (state, action) => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
