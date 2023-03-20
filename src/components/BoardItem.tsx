import React, {useState, SetStateAction, ReactElement} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentItem } from '../store/ItemStore';
import './BoardItem.scss'
import { LibraryItem } from '../types/types';


interface BoardItemProps {
    item : LibraryItem;
    children?: React.ReactElement;
    setList: React.Dispatch<SetStateAction<LibraryItem[]>>,
} 


const BoardItem: React.FC<BoardItemProps> = ({item, setList, children}) => {
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
        
       // el.style.boxShadow = 'none';
        console.log('END')
    }
    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const el = (e.target as HTMLDivElement);
        
        if (el.className === 'board__item') {
           // el.style.boxShadow = '0 4px 3px grey';
        }
        console.log("OVER")
    }
    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        const el = (e.target as HTMLDivElement);
        
        //el.style.boxShadow = 'none';
        console.log('LEAVE')
    }
    function dropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const el = (e.target as HTMLDivElement);
        //el.style.boxShadow = 'none';
        console.log('drop')
        setList(prev => prev.map(elem => {
        
            if (elem.id === item.id ) {
                return {...elem, order: currentItem.order}
            }
            if (elem.id === currentItem.id) {
                return {...elem, order: item.order}
            }
            return elem
        }))

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
        className='board__item board__item_initial'>{children}
        
        </div>
  )
}

export default BoardItem
