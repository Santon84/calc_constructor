import { configureStore } from "@reduxjs/toolkit";
import ItemStore from "./ItemStore";

import currentNumStore from "./currentNumStore";
import ComponentsStore from "./ComponentsStore";

const store = configureStore({
    reducer: {
        currentItem: ItemStore,
        currentNumber: currentNumStore,
        componentList: ComponentsStore
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>