import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Display.scss'
const Display = () => {
const currentNumber = useSelector((state:RootState) => state.currentNumber);
  return (
    <div className='calc__display'>
      <input value={currentNumber.value} disabled></input>
    </div>
  )
}

export default Display
