import { configureStore } from "@reduxjs/toolkit";
import ItemStore from "./ItemStore";

import currentNumStore from "./currentNumStore";
import componentsStore from "./componentsStore";


const store = configureStore({
    reducer: {
        currentItem: ItemStore,
        currentNumber: currentNumStore,
        componentList: componentsStore
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>