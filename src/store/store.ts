import { configureStore } from "@reduxjs/toolkit";
import ItemStore from "./ItemStore";

import CalculateStore from "./CalculateStore";
import componentsStore from "./componentsStore";
import runtimeStore from "./runtimeStore";


const store = configureStore({
    reducer: {
        currentItem: ItemStore,
        currentNumber: CalculateStore,
        componentList: componentsStore,
        runtimeSwitch: runtimeStore
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>