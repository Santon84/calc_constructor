import { createSlice } from "@reduxjs/toolkit";
import { LibraryItem } from "../types/types";

const initialState:LibraryItem[] = []
export const componentsStore = createSlice ({
    name: 'componentList',
    initialState,
    reducers: {
        setComponentList : (state, action) => {
        if (state.find( item => item.id === action.payload.id)) {
            return state;
        }
        if (action.payload.id === 1) {
            return [action.payload, ...state];
        }
         
         return [...state, action.payload];
        },
        deleteComponentList : (state, action) => {
            return state.filter(item => item.id!== action.payload);
           },
        sortComponentList : (state, action) => {
            console.log(action.payload);
            const {item, currentItem} = action.payload;

            const startIndex = state.findIndex(elem => elem.id === item.id);
            const endIndex = state.findIndex(elem => elem.id === currentItem.id);
            if (item.id === 1 || currentItem.id === 1) {
                return state
            }
            
            if (startIndex !== endIndex) {
                state.splice(endIndex, 1);
                console.log(startIndex)
                state.splice(startIndex, 0, currentItem);
            }
            return state;
        
        }
    }

})

export const { setComponentList, deleteComponentList, sortComponentList } = componentsStore.actions; 
export default componentsStore.reducer;