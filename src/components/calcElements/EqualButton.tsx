import React from 'react'
import CalcButton from '../UI/CalcButton'
import { useDispatch } from 'react-redux';
import './EqualButton.scss';
import { doCalculation } from '../../store/CalculateStore';



const EqualButton = () => {
  const dispatch = useDispatch();
  const clickHandle = (e: any) => {
    // return (event: React.MouseEvent) => {
    dispatch(doCalculation(null));  
     // }
     
  }
  return (
    <div className='calc__equal'>
          
        
        
           <CalcButton value={'='} addClass='calc__equal_color' clickHandler={clickHandle} />
       
        
    
   </div>
  )
}

export default EqualButton
