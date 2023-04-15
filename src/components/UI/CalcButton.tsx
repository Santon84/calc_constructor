import React, { FC } from 'react'
import './CalcButton.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'


interface ICalcButtonProps {
    value: string;
    clickHandler: (e: React.MouseEvent<Element, MouseEvent>) => void;
    addClass?: string;
}
const CalcButton:FC<ICalcButtonProps> = ({value, clickHandler, addClass}) => {
  const  active  = useSelector((state:RootState) => state.runtimeSwitch);
  return (
    <div key={value} className={`calc__button ${addClass}`} style={{pointerEvents: active ? 'auto' :'none'}}>
      <button type='button' className={addClass} onClick={(e) => clickHandler(e)}>{value}</button>
    </div>
  )
}

export default CalcButton
