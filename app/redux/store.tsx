//store.jsx

"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pageReducer from "./Features/pageSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  page: pageReducer,
  //add all your reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: persistedReducer,
});
