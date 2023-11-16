import cartReducer from './cart/cartSlice';
import counterReducer from './counter/counterSlice';
import userReducer from './UserApi/UserSlice';

export default {
  cart: cartReducer,
  counter: counterReducer,
  user: userReducer,
};
