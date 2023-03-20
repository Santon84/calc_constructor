import './Canvas.scss'
import React, { useState } from 'react'
import Empty from './Empty'
import { LibraryComponents, LibraryItem } from '../types/types'
import BoardItem from './BoardItem'
import { Dispatch, SetStateAction } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import SwitchComponent from './SwitchComponent'
import { setComponentList } from '../store/ComponentsStore'


interface CanvasProps {
  mylist?: LibraryItem[];
  setList: Dispatch<SetStateAction<LibraryItem[]>>
}

const Canvas:React.FC<CanvasProps> = ({ mylist, setList}) => {
  // const { mylist as list1, setList } = mylist;
    const [itemList,  setItemList] = useState<LibraryItem[]>([
      {id: 1,  component: LibraryComponents.Display, order: 1},
      {id: 2,  component: LibraryComponents.Operators, order: 2},
      {id: 3,  component: LibraryComponents.Numbers, order: 3},
      {id: 4,  component: LibraryComponents.EqualButton, order: 4},
  ])
  const currentItem = useSelector((state:RootState) => state.currentItem);
  const componets = useSelector((state:RootState) => state.componentList);
  const dispatch = useDispatch();
  
  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    console.log('curent')
    console.log(currentItem)
  }


  function dragEnterHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const board = (e.target as HTMLDivElement);
    if (board.className === 'board'){
        console.log(board.id)
        board.style.backgroundColor = 'lightgray'
        console.log(currentItem)
    }
    
}
function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const board = (e.target as HTMLDivElement);
    if (board.className === 'board'){
        console.log(board.id)
        board.style.backgroundColor = 'white'
    }
    
}
function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
   // if (id === '1') return;
    const board = (e.target as HTMLDivElement);
    if (board.className === 'board'){
        console.log(currentItem)
        board.style.backgroundColor = 'white'
    }
    if (!currentItem){
        return;
    }
    dispatch(setComponentList(currentItem))
    
  }


  function clickHandle(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        
    const el = (e.target as HTMLDivElement);
    if (e.detail === 2 && el.className.includes('board__item')) {
        
     
      setList(prev => prev.filter(item => {
            
            return item.id !== Number(el.id)
        }))
    } 
        
    
  }
  
  return (
    <div key='2' className='canvas canvas__empty'
    onDragOver = {(e) => dragOverHandler(e)}
    onDragEnter = {(e) => dragEnterHandler(e)}
    onDragLeave = {(e) => dragLeaveHandler(e)}
    onDrop = {(e) => dropHandler(e)}
    onClick = {(e) => clickHandle(e)}
    >
       
      {componets?.length ? (componets?.map(item => {
        return (
          
            <BoardItem  key={item.id} setList={setItemList} item={item} >
                   {SwitchComponent(item.component)}
            </BoardItem>
            
        )
      })) 
      : <Empty/> 
    }
    
    </div>
  )
}

export default Canvas
