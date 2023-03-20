import React from 'react'
import CalcButton from '../UI/CalcButton'
import { useDispatch } from 'react-redux';
import { addNum } from '../../store/currentNumStore';
import './EqualButton.scss';



const EqualButton = () => {
  const dispatch = useDispatch();

  const clickHandle = (number: string) => {
    // return (event: React.MouseEvent) => {
    //  dispatch(addNum(number));  
     // }
     console.log(number);
  }
  return (
    <div className='calc__equal'>
          
        
        
           <CalcButton value={'='} addClass='calc__equal_color' clickHandler={clickHandle} />
       
        
    
   </div>
  )
}

export default EqualButton
