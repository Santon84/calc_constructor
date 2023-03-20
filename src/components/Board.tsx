import React, {SetStateAction } from 'react'
import './Board.scss'
import BoardItem from './BoardItem'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentItem } from '../store/ItemStore';

export interface Item {
    id: number,
    text: string,
    order: number
}

export interface BoardProps {
    items?: Item[],
    id?: string,
    setList: React.Dispatch<SetStateAction<Item[]>>,
    // currentItem: Item,
    // setCurrentItem: React.Dispatch<SetStateAction<Item>>
}

const Board: React.FC<BoardProps> = ({ items, id, setList})=> {
    
    const currentItem = useSelector((state:RootState) => state.currentItem);
    

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
        if (id === '1') return;
        const board = (e.target as HTMLDivElement);
        if (board.className === 'board'){
            console.log(currentItem)
            board.style.backgroundColor = 'white'
        }
        if (!currentItem){
            return;
        }
        
        // setList(prev => {
        //     console.log('setList');
        //     console.log(~prev.indexOf(currentItem));
        //     if ( prev.some(item => item.id === currentItem.id)) return prev
        //     return [...prev, currentItem]
        // });
        
    }
    function clickHandle(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        
        const el = (e.target as HTMLDivElement);
        if (e.detail === 2 && el.className==='board__item') {
            
            
            setList(prev => prev.filter(item => {
                
                return item.id.toString() !== el.id
            }))
        } 
            
        
    }
    
    return (
    <div className='board' id={id} 
    onDragOver = {(e) => dragOverHandler(e)}
    onDragEnter = {(e) => dragEnterHandler(e)}
    onDragLeave = {(e) => dragLeaveHandler(e)}
    onDrop = {(e) => dropHandler(e)}
    onClick = {(e) => clickHandle(e)}
    >
        
      {/* {items?.sort((a,b) => a.order - b.order).map(item => {
        return (
                // <BoardItem setList={setList} key={item.id} item={item}/>
        )

      })} */}
    </div>
  )
}

export default Board
