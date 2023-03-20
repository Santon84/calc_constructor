import React, { useState } from 'react';
import './App.scss';
//import CalcButton from './components/!CalcButton';
import Library from './components/Library';
import Canvas from './components/Canvas';
import { LibraryItem, LibraryComponents } from './types/types';


function App() {
  
  const [list1, setList] = useState<LibraryItem[]>([
    {id: 1,  component: LibraryComponents.Display, order: 1},
    {id: 2,  component: LibraryComponents.Operators, order: 2},
   
]);
  // function clickHandle() {
  //     //dispatch(setCurrentUser({id: 1, text: 'no 1', order: 0}));
    
  // }
  // function clickDeleteHandle() {
  //   console.log();
  // }
  // function clickShowHandle() {
  //   console.log(endList)
  // }
  //const [currentItem, setCurrentItem] = useState({id: 1, text: '', order: 0}); 
 //const itemsList: Item[]  =  [{id: 1, text: 'no 1'},{id:2, text: 'no 2'}]
 // const [itemsList, setItemsList] = useState([{id: 1, text: 'no 1', order: 0},{id:2, text: 'no 2', order: 1},{id:200, text: 'no 4', order: 2},{id:400, text: 'no 5', order: 3}])
  //const [endList, setEndList] = useState<Item[]>([])
  console.log('list1');
  console.log(list1);
  return (
    <div className="conteiner">
     {/* <Board key='1' id='1'  items={itemsList} setList={setItemsList}/>
     <Board key='2' id='2'  items={endList} setList={setEndList}/> */}
      {/* <button type='button' onClick={clickHandle}>Add</button>
      <button type='button' onClick={clickShowHandle}>Show</button>
      <button type='button' onClick={clickDeleteHandle}>Delete </button> */}

      {/* <CalcButton value='HELLO' component={<BoardItem setList={setEndList} key={1} item={itemsList[0]}/>}></CalcButton> */}
      <Library key='1' setList={setList}/>
      <Canvas  key='2' mylist={list1} setList={setList}/>
    </div>
  );
}

export default App;
