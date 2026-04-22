// rootReducer.js
import shopData from "./reducer"; // Importing the default export
// import cartReducer from "./reducers/cartReducer";
import { CartSlice } from "./Slices/CartSlice";

const rootReducer = {
  shopData,
  cart: CartSlice.reducer,
};

export default rootReducer;
