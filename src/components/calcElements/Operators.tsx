import React from 'react'
import CalcButton from '../UI/CalcButton'
import './Operators.scss'
import { useDispatch } from 'react-redux';
import { setOperator } from '../../store/CalculateStore';
const operators = ['*','/','+','-']
     

const Operators = () => {
  const dispatch = useDispatch();
  const clickHandle = (e : any) => {
    // return (event: React.MouseEvent) => {
      dispatch(setOperator(e))
     // }
     
  }
  return (
    <div className='calc__operators'>
    
      {operators.map((item, index) => {
        return <CalcButton key={index} addClass='calc__operators_width' value={item} clickHandler={clickHandle} />
      })}
    </div>
  )
}

export default Operators
