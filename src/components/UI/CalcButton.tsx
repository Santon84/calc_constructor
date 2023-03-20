import React, { FC } from 'react'
import './CalcButton.scss'

interface ICalcButtonProps {
    value: string;
    clickHandler: (value: string) => void;
    addClass?: string;
}
const CalcButton:FC<ICalcButtonProps> = ({value, clickHandler, addClass}) => {
  return (
    <div key={value} className={`calc__button ${addClass}`}>
      <button type='button' className={addClass} onClick={() => clickHandler(value)}>{value}</button>
    </div>
  )
}

export default CalcButton
