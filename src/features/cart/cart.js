import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCart: (state, action) => {
      const itemToAdd = action.payload;
      console.log(itemToAdd + 'cons');
      const itemPresent = state.cartItems.findIndex(thisElement => {
        return thisElement.item.title === itemToAdd.title;
      });
      if (itemPresent !== -1) {
        const itemFound = state.cartItems[itemPresent];
        itemFound.quantity += 1;
      } else {
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
    },
    removeCart: (state, action) => {
      const itemToRemove = action.payload;
      const itemFound = '';
      const itemPresent = state.cartItems.findIndex(thisElement => {
        return thisElement.item.title === itemToRemove.title;
      });
      const updatedCartItems = [...state.cartItems];
      if (itemPresent !== -1) {
        const itemFound = updatedCartItems[itemPresent];
        itemFound.quantity -= 1;
      }
      if (itemPresent.quantity === 0) {
        itemFound = updatedCartItems.splice(itemPresent);
        itemFound.quantity -= 1;
      }
      if (itemFound.quantity === 0) {
        updatedCartItems.splice(itemPresent, 1);
      } else {
        console.log('Item not found in the cart:', itemToRemove);
      }
    },
    clearCart: state => {
      return {...state, cartItems: []};
    },
  },
});

// Action creators are generated for each case reducer function
export const {addCart, removeCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
