import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
export const runtimeStore = createSlice ({
    name: 'runtimeSwitch',
    initialState,
    reducers: {
        setRuntime : (state) => {
         return !state;
        },
        
    }

})

export const { setRuntime } = runtimeStore.actions; 
export default runtimeStore.reducer;