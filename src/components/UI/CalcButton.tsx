import React, { FC } from 'react'
import './CalcButton.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'


interface ICalcButtonProps {
    value: string;
    clickHandler: (item: string) => void;
    addClass?: string;
}
const CalcButton:FC<ICalcButtonProps> = ({value, clickHandler, addClass}) => {
  const  active  = useSelector((state:RootState) => state.runtimeSwitch);
  return (
    <div key={value} className={`calc__button ${addClass}`} style={{pointerEvents: active ? 'auto' :'none'}}>
      <button type='button' className={addClass} onClick={() => clickHandler(value)}>{value}</button>
    </div>
  )
}

export default CalcButton
