import { configureStore } from "@reduxjs/toolkit";
import ItemStore from "./ItemStore";
import ComponentsStore from "./ComponentsStore";
import CalculateStore from "./CalculateStore";

import runtimeStore from "./runtimeStore";


const store = configureStore({
    reducer: {
        currentItem: ItemStore,
        currentNumber: CalculateStore,
        componentList: ComponentsStore,
        runtimeSwitch: runtimeStore
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>