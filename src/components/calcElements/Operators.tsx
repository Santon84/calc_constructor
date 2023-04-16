import React from 'react'
import CalcButton from '../UI/CalcButton'
import './Operators.scss'
import { ComputeButton } from '../../logic/ComputeButton';
const operators = ['*','/','+','-']
     
const clickHandle = (e : any) => {
    // return (event: React.MouseEvent) => {
       
     // }
     ComputeButton(e);
}
const Operators = () => {
  return (
    <div className='calc__operators'>
    
      {operators.map((item, index) => {
        return <CalcButton key={index} addClass='calc__operators_width' value={item} clickHandler={clickHandle} />
      })}
    </div>
  )
}

export default Operators
