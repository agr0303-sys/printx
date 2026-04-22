import { createSlice } from "@reduxjs/toolkit";

// Load cart data from local storage if available
const initialCartState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    remove: (state, action) => {
      const updatedState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    },
    clear: (state) => {
      localStorage.removeItem("cart");
      return []; // Clear the entire cart by returning an empty array
    },
  },
});

export const { add, remove,clear } = CartSlice.actions;
export default CartSlice.reducer;
