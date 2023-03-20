import React from 'react'
import CalcButton from '../UI/CalcButton'
import './Operators.scss'
const operators = ['*','/','+','-']
const clickHandle = () => {
    // return (event: React.MouseEvent) => {
       
     // }
     console.log('hello');
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
