import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


import { RootState } from '../store/store';
import { setCurrentItem } from '../store/ItemStore';
import { LibraryItem } from '../types/types';
import { sortComponentList, setComponentList } from '../store/ComponentsStore';

import './BoardItem.scss'


interface BoardItemProps {
    item : LibraryItem;
    children?: React.ReactElement;
    className?: string;
    
} 


const BoardItem: React.FC<BoardItemProps> = ({item, children, className}) => {
    const currentItem = useSelector((state:RootState) => state.currentItem);
    const active  = useSelector((state:RootState) => state.runtimeSwitch);
    const dispatch = useDispatch();
   
    function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
        if (active) e.preventDefault();
        dispatch(setCurrentItem(item));
    }


    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        const el = (e.target as HTMLDivElement);
        
        el.style.borderBottom = 'none';
      
        console.log('END')
    }
    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const el = (e.target as HTMLDivElement);
        const parent = el.parentNode as HTMLDivElement;
        
        
        if (parent?.className.includes('board__item_placed')) {
            parent.style.borderBottom = '1px solid blue';
        }
        
    }
    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        const el = (e.target as HTMLDivElement);
        const parent = el.parentNode as HTMLDivElement;
        parent.style.borderBottom = 'none';

    }


    function dropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const el = (e.target as HTMLDivElement);
        const parent = el.parentNode as HTMLDivElement;
        parent.style.borderBottom = 'none';
       
        if (parent?.className.includes('board__item_placed') && item.id !== currentItem.id) {
            dispatch(setComponentList(currentItem))
            dispatch(sortComponentList({item, currentItem}));
            
        }

    }
    
    return (
        <div draggable={!active}   
        onDragEnd = {(e) => dragEndHandler(e)}
        onDragStart = {(e) => dragStartHandler(e)}
        onDragOver = {(e) => dragOverHandler(e)}
        onDragLeave = {(e) => dragLeaveHandler(e)}
        onDrop = {(e) => dropHandler(e)}
        id={item.id.toString()}
        key={item.id.toString()}
        className={'board__item ' + className}
        
        >
            {children}
        
        </div>
  )
}

export default BoardItem
