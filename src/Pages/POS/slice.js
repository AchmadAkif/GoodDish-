import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productOnCart: [],
};

const posSlice = createSlice({
  name: 'productOnCart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const cart = state.productOnCart;
      const newProduct = action.payload;
      const productIsExist = cart.find((data) => newProduct.id === data.id);

      if (productIsExist) {
        const productIndex = cart.findIndex((e) => e.id === newProduct.id);

        cart[productIndex] = {
          ...cart[productIndex],
          amount: cart[productIndex].amount + 1,
        };
      } else {
        cart.push({ ...newProduct, amount: 1 });
      }
    },
    addAmount: (state, action) => {
      const cart = state.productOnCart;
      const productID = action.payload;
      const productIsExist = cart.find((data) => productID === data.id);

      if (productIsExist) {
        const productIndex = cart.findIndex((e) => e.id === productID);

        cart[productIndex] = {
          ...cart[productIndex],
          amount: cart[productIndex].amount + 1,
        };
      }
    },
  },
});

export const { addProduct, addAmount } = posSlice.actions;
export default posSlice.reducer;
