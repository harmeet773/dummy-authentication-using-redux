import React from "react";
import { useSelector, useDispatch } from "react-redux"; 

import { createReducer } from '@reduxjs/toolkit';

const counterAppReducer = createReducer({ count: 0 }, (builder) => {
  builder
    .addCase('INCREMENT', (state) => { state.count += 1; })
    .addCase('DECREMENT', (state) => { state.count -= 1; });
});



const CounterApp = () => {
const dispatch = useDispatch();
const countValue = useSelector((state) => state.counter) ;
console.log(countValue) ;

    return (
        <>
        <div> count is {countValue.count} </div>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>

    </>);
}
export default CounterApp;

export { counterAppReducer  } ;