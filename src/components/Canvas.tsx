import './Canvas.scss'
import React, { useState } from 'react'
import Empty from './Empty'
import { LibraryComponents, LibraryItem } from '../types/types'
import BoardItem from './BoardItem'
import { Dispatch, SetStateAction } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import SwitchComponent from './SwitchComponent'
import { deleteComponentList, setComponentList } from '../store/componentsStore'


interface CanvasProps {
  mylist?: LibraryItem[];
  setList: Dispatch<SetStateAction<LibraryItem[]>>
}

const Canvas:React.FC<CanvasProps> = ({ mylist, setList}) => {
  // const { mylist as list1, setList } = mylist;
 
  const currentItem = useSelector((state:RootState) => state.currentItem);
  const componets = useSelector((state:RootState) => state.componentList);
  const sortedComponents = [...componets];
  //sortedComponents.sort((a, b) => a.order - b.order);
  const dispatch = useDispatch();
  
  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    
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
    //console.log(el);
      
    if (e.detail === 2 && el.className.includes('board__item')) {
      
      dispatch(deleteComponentList(parseInt(el.id)))
      
    } 
        
    
  }
  const class1 = componets?.length ? '' : 'canvas__empty';
  return (
    <div key='2' className={'canvas ' + class1}
    onDragOver = {(e) => dragOverHandler(e)}
    onDragEnter = {(e) => dragEnterHandler(e)}
    onDragLeave = {(e) => dragLeaveHandler(e)}
    onDrop = {(e) => dropHandler(e)}
    onClick = {(e) => clickHandle(e)}
    >
       
      {sortedComponents?.length ? (sortedComponents?.map(item => {
        return (
          
            <BoardItem className={'board__item_placed'} key={item.id} item={item} >
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
