import { configureStore, createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {userDetails, userLoginReducer } from "./components/Login";

const preloadedState = {
  userReducer: {  
    isAuthenticated: false
  }}

const store = configureStore({
  reducer: { userReducer :userLoginReducer },
});
export default store;