import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productOnCart: [],
};

const productSlice = createSlice({
  name: 'productOnCart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const cart = state.productOnCart;
      const newProduct = action.payload;

      const productIsExist = cart.find((data) => newProduct.id === data.id);

      if (productIsExist) {
        const productToRemove = cart.findIndex((e) => e.id === newProduct.id);
        const addProductAmount = {
          ...cart[productToRemove],
          amount: cart[productToRemove].amount + 1,
        };

        cart.push(addProductAmount);
        cart.splice(productToRemove, 1);
      } else {
        cart.push({ ...newProduct, amount: 1 });
      }
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
