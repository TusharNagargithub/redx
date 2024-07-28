import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('counter');// counter this counter represent the name like this represent in app.module.ts+


// CounterState -> they represent the type of Data
export const getCounter = createSelector(getCounterState,(state) => {
    return state.counter;
});

// getCounter get only counter value

export const getChangeNAme = createSelector(getCounterState,(state) => {
    return state.channelName;
});