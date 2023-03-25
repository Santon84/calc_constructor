import React, {useState, SetStateAction, ReactElement} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentItem } from '../store/ItemStore';
import './BoardItem.scss'
import { LibraryItem } from '../types/types';
import { sortComponentList } from '../store/componentsStore';

interface BoardItemProps {
    item : LibraryItem;
    children?: React.ReactElement;
    setList: React.Dispatch<SetStateAction<LibraryItem[]>>,
    className?: string;
} 


const BoardItem: React.FC<BoardItemProps> = ({item, setList, children, className}) => {
    const currentItem = useSelector((state:RootState) => state.currentItem);
    
    const dispatch = useDispatch();
    // const [currentItem, setCurrentItem] = useState<HTMLDivElement>();
    function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
        const el = (e.target as HTMLDivElement);
        
        dispatch(setCurrentItem(item));
        //el.style.cursor = 'move';
        
        
    }
    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        const el = (e.target as HTMLDivElement);
        
        el.style.borderBottom = 'none';
        console.log('END')
    }
    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const el = (e.target as HTMLDivElement);
        
        //if (el.className === 'board__item') {
            el.style.borderBottom = '1px solid blue';
        //}
        console.log("OVER")
    }
    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        const el = (e.target as HTMLDivElement);
        
        el.style.borderBottom = 'none';
        console.log('LEAVE')
    }
    function dropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const el = (e.target as HTMLDivElement);
        el.style.borderBottom = 'none';
        console.log('drop')
        console.log(el.className)
        if (el.className.includes('board__item_placed') && item.id !== currentItem.id) {
            dispatch(sortComponentList({item, currentItem}));
        }

    }
    
    return (
        <div draggable={true}   
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
