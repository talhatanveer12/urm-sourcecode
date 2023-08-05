import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  //token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    catchAction: (state, action) => {
      state.loading = action.payload;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      localStorage.setItem("id",action.payload.user.id)
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
    profile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice;
export const { login, logout, profile,catchAction } = authSlice.actions;