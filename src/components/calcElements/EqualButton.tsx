import React from 'react'
import CalcButton from '../UI/CalcButton'
import { useDispatch } from 'react-redux';
import './EqualButton.scss';
import { ComputeButton } from '../../logic/ComputeButton';



const EqualButton = () => {

  const clickHandle = (e: any) => {
    // return (event: React.MouseEvent) => {
    //  dispatch(addNum(number));  
     // }
     ComputeButton(e);
     
  }
  return (
    <div className='calc__equal'>
          
        
        
           <CalcButton value={'='} addClass='calc__equal_color' clickHandler={clickHandle} />
       
        
    
   </div>
  )
}

export default EqualButton
