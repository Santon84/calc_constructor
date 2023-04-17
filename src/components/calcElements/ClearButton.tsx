import React from 'react'
import CalcButton from '../UI/CalcButton'
import { useDispatch } from 'react-redux';
import { ClearAll } from '../../store/CalculateStore';
import './ClearButton.scss';



const ClearButton = () => {
  const dispatch = useDispatch();

  const clickHandle = () => {
    // return (event: React.MouseEvent) => {
    console.log('clear clicked');
    dispatch(ClearAll(null));  

  }
  return (
    <div className='calc__clear'>
           <CalcButton value={'AC'} addClass='calc__clear_color' clickHandler={clickHandle} />
   </div>
  )
}

export default ClearButton
