import { configureStore, createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";


import { counterAppReducer } from "./counterApp/CounterApp";




// it should be a function so change it 

const rootReducer = combineReducers({
  counter: counterAppReducer,
});


const store = configureStore({
  reducer: rootReducer,

});


export default store;