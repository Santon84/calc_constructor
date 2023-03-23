import { createSlice } from "@reduxjs/toolkit";

const initialState:boolean = true;

export const switchItemStore = createSlice ({
    name: 'disableItem',
    initialState,
    reducers: {
        toggleDisableItem : (state) => {
            return !state;
        },
        
        
    }

})

export const { toggleDisableItem } = switchItemStore.actions; 
export default switchItemStore.reducer;