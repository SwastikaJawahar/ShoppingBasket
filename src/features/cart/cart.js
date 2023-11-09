import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCart: (state, action) => {},
    clearCart: state => {},
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addCart, removeCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
