import { createSlice } from '@reduxjs/toolkit';
import operations from './Auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: null,
  isRefreshingUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    [operations.refreshUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [operations.refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [operations.refreshUser.rejected](state) {
      state.isRefreshingUser = false;
    },
  },
});

export default authSlice.reducer;
