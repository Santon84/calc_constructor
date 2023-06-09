import { createSlice } from "@reduxjs/toolkit";
import { LibraryItem } from "../types/types";
import { LibraryComponents } from "../types/types";
const initialState:LibraryItem[] = [
   
]
export const ComponentsStore = createSlice ({
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
            const {item, currentItem} = action.payload;

            const startIndex = state.findIndex(elem => elem.id === item.id);
            const endIndex = state.findIndex(elem => elem.id === currentItem.id);
            console.log(startIndex, endIndex);
            if (item.id === 1 || currentItem.id === 1 || startIndex === endIndex) {
                return state
            }
            
            if (startIndex !== endIndex) {
                state.splice(endIndex, 1);
                console.log([...state]);
                state.splice(startIndex > endIndex ? startIndex : startIndex+1, 0, currentItem);
                console.log();
            }
            return state;
        
        }
    }

})

export const { setComponentList, deleteComponentList, sortComponentList } = ComponentsStore.actions; 
export default ComponentsStore.reducer;