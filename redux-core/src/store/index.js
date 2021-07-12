import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const store = createStore(counterSlice.reducer);

export default store;
