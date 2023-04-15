import React from 'react'
import CalcButton from '../UI/CalcButton'
import { useDispatch } from 'react-redux';
import { addNum } from '../../store/currentNumStore';
import './ClearButton.scss';
import { ComputeButton } from '../../logic/ComputeButton';



const ClearButton = () => {
  const dispatch = useDispatch();

  const clickHandle = (e: React.MouseEvent<Element, MouseEvent>) => {
    // return (event: React.MouseEvent) => {
    //  dispatch(addNum(number));  
     // }
     ComputeButton(e);
     //console.log(number);
  }
  return (
    <div className='calc__clear'>
           <CalcButton value={'AC'} addClass='calc__clear_color' clickHandler={clickHandle} />
   </div>
  )
}

export default ClearButton
