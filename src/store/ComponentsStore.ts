import { createSlice } from "@reduxjs/toolkit";
import { LibraryItem } from "../types/types";

const initialState:LibraryItem[] = []
export const ComponentsStore = createSlice ({
    name: 'componentList',
    initialState,
    reducers: {
        setComponentList : (state, action) => {
         return [...state, action.payload];
        },
        
    }

})

export const { setComponentList } = ComponentsStore.actions; 
export default ComponentsStore.reducer;