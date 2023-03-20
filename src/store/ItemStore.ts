import { createSlice } from "@reduxjs/toolkit";
import { LibraryItem } from "../types/types";

const initialState:LibraryItem = { 
    id: 0,
    component: null,
    order:0
}
export const ItemStore = createSlice ({
    name: 'currentItem',
    initialState,
    reducers: {
        setCurrentItem : (state, action) => {
         return action.payload;
        },
        
    }

})

export const { setCurrentItem } = ItemStore.actions; 
export default ItemStore.reducer;