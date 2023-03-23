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
            if (startIndex !== endIndex) {
                state.splice(endIndex, 1);
                console.log(startIndex)
                state.splice(startIndex, 0, currentItem);
            }
            return state;
        //    return state.map(elem => {
        
        //         if (elem.id === item.id ) {
        //             return {...elem, order: currentItem.order}
        //         }
        //         if (elem.id === currentItem.id) {
        //             return {...elem, order: item.order}
        //         }
        //         return elem
        //     })
        }
    }

})

export const { setComponentList, deleteComponentList, sortComponentList } = componentsStore.actions; 
export default componentsStore.reducer;