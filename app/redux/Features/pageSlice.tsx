"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "dashboard",
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
    removePage: (state) => {
      state.page = "";
    },
    // incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    // },
  },
});

export const { setPage, removePage } = pageSlice.actions;

export default pageSlice.reducer;
