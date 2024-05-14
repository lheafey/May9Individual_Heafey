import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
import { createSlice } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});