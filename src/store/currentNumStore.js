import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '0',
}

export const currentNumStore = createSlice({
  name: 'currentNumber',
  initialState,
  reducers: {
    addNum: (state, action) => {
      //return  state.value === '0' ? action.payload : state.value += action.payload
      if (state.value === '0') {state.value = ''}
      if (state.value.length === 9) return state.value;
      state.value += action.payload
    },
    delNum: (state) => {
      state.value -= 1
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addNum, delNum } = currentNumStore.actions

export default currentNumStore.reducer