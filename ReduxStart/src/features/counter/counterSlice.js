import { createSlice } from "@reduxjs/toolkit";
const initialState = {value : 0}
const counterSlice =createSlice({
    name : 'counter',
    initialState,
    reducers: {
        increment: (state)=> {
            state.value+=1
        },
        decrement: (state)=> {
            state.value-=1
        },
        incrementByValue:(state, action) => {
            state.value+=action.payload
        },
        addToCart:(state, action) => {
            state.push(action.payload)
        }
    }
});
export const {increment, decrement, incrementByValue, addToCart} = counterSlice.actions;
export default counterSlice.reducer