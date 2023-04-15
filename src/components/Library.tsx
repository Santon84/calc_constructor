import React, {useState} from 'react'
import BoardItem from './BoardItem'
import './Library.scss'
import SwitchComponent from './SwitchComponent'
import { Dispatch, SetStateAction } from "react";
import { LibraryComponents, LibraryItem } from '../types/types'
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const renderData = [
    {id: 1,  component: LibraryComponents.Display, order: 1},
    {id: 2,  component: LibraryComponents.Operators, order: 2},
    {id: 3,  component: LibraryComponents.Numbers, order: 3},
    {id: 4,  component: LibraryComponents.EqualButton, order: 4},
    {id: 5,  component: LibraryComponents.ClearButton, order: 5},
]

interface LibraryProps {
  setList : Dispatch<SetStateAction<LibraryItem[]>>
}


const Library:React.FC<LibraryProps> = ({setList}) => {
  const  active  = useSelector((state:RootState) => state.runtimeSwitch);
  return (
    <div className='board' key='231311'>
      {active ?  null :
      renderData.map(item => {
        return (
            <BoardItem className='board__item_initial' key={item.id} item={item} >
                 {SwitchComponent(item.component)}
            </BoardItem>
            )
      })}
    </div>
  )
}

export default Library