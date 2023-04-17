import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '0',
  prevNum: '',
  operator: ''
}

export const CalculateStore = createSlice({
  name: 'currentNumber',
  initialState,
  reducers: {
    addNum: (state, action) => {
      console.log(state.value)
      //return  state.value === '0' ? action.payload : state.value += action.payload
      if (action.payload === ',' && state.value.includes(',')) {
      return state.value;
      }
      if (state.value === '0') {state.value = ''}
      if (state.value.length === 9) return state.value;
      state.value += action.payload
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
      state.prevNum = state.value;
      state.value = '0';
    },
    doCalculation: (state) => {
      console.log(state.value, state.prevNum, state.operator);
      //if (state.operator ==='' || state.prevNum === '') {return};
      console.log('calculating');
      switch (state.operator) {
        case '-' : 
        console.log('-')
        state.value = String(Number(state.prevNum) - Number(state.value));
                  break;
        case '+' : state.value = String(Number(state.prevNum) + Number(state.value));
        break;
        case '/' : state.value = String(Number(state.prevNum) / Number(state.value));
        break;
        case '*' : state.value = String(Number(state.prevNum) * Number(state.value));
        break;
        default : break;
      }
      state.prevNum = '';

    },
    delNum: (state) => {
      return state.value -= 1
    },
    ClearAll: (state) => {
      console.log('state')
      console.log(state.value);
      return state = initialState;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addNum, delNum, ClearAll,doCalculation, setOperator } = CalculateStore.actions

export default CalculateStore.reducer