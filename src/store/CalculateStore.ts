import { createSlice } from '@reduxjs/toolkit'
import { Slice } from '@reduxjs/toolkit'
const initialState = {
  value: '0',
  prevNum: '',
  operator: '',
  isEqual: false 
}

export const CalculateStore: Slice<any>  = createSlice({
  name: 'currentNumber',
  initialState,
  reducers: {
    addNum: (state, action) => {
      console.log(state.value)
      
      //return  state.value === '0' ? action.payload : state.value += action.payload
      if (action.payload === ',') {
        action.payload = '.';
        if (state.value.includes('.')) {return}
      }
      if (state.value === '0') {
        if (action.payload === '0') return;
        if (action.payload === '.') {
          state.value += action.payload;
          return;
        }
        state.value = '';
      }
      
      
      if (state.value.length === 9) return state.value;
      if (state.isEqual) {
        state.isEqual = false;
        state.value = action.payload;
        return;
      }

      state.value += action.payload
    },
    setOperator: (state, action) => {
      state.isEqual = false;
      state.operator = action.payload;
      state.prevNum = state.value;
      state.value = '0';
    },
    doCalculation: (state) => {
      let buffer;
      console.log(state.value, state.prevNum, state.operator, buffer);
      if (state.operator ==='' || state.prevNum === '') {return};
      console.log('calculating');
      let b;
      let a;

      if (state.isEqual) {
        b = Number(state.prevNum);
        a = Number(state.value); 
        buffer = state.prevNum
      } else {
        a = Number(state.prevNum);
        b = Number(state.value);
        buffer = state.value;
      }
      switch (state.operator) {
        case '-' : 
            state.value = String(a - b);
            break;
        case '+' : 
            state.value = String(a + b);
            break;
        case '/' : 
            state.value = String(a / b);
            break;
        case '*' : 
            state.value = String(a * b);
            break;
        default : return;
      }
      state.prevNum = buffer;
      state.isEqual = true;
      console.log(state.value, state.prevNum, state.operator, buffer);
      
    },
    delNum: (state) => {
      return state.value
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