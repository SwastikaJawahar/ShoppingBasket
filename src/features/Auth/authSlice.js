import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: [
      {username: 'swastika', password: '1234'},
      {username: 'yeshasvi', password: '12345'},
    ],
    message: '',
  },
  reducers: {
    login: (state, action) => {
      const loginUser = action.payload;
      const savedUser = JSON.parse(JSON.stringify(state.user));
      const userFound = savedUser.find(thisElement => {
        return (
          thisElement.username === loginUser.username &&
          thisElement.password === loginUser.password
        );
      });
      if (userFound) {
        state.isAuthenticated = true;
        state.user = action.payload;
      } else {
        const newUser = [...state.user, loginUser];
        state.isAuthenticated = false;
      }
    },
    register: (state, action) => {
      const loginUser = action.payload;
      const savedUser = JSON.parse(JSON.stringify(state.user));
      const userFound = savedUser.findIndex(thisElement => {
        return (
          thisElement.username === loginUser.username &&
          thisElement.password === loginUser.password
        );
      });
      if (userFound !== -1) {
        state.isAuthenticated = false;
        state.message = 'User Already Registered';
      } else {
        const updatedUsers = [...savedUser, loginUser];
        state.user = updatedUsers;
        state.isAuthenticated = false;
      }
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = [];
    },
  },
});

export const {login, logout, register} = authSlice.actions;

export default authSlice.reducer;
