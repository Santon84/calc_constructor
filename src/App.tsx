import React, { useState } from 'react';
import './App.scss';
//import CalcButton from './components/!CalcButton';
import Library from './components/Library';
import Canvas from './components/Canvas';
import { LibraryItem, LibraryComponents } from './types/types';
import Switcher from './components/UI/Switcher';



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
    <div className='conteiner'>
      <div className='inner-conteiner'>
      
        <Switcher/>
    
        <div className="calc-conteiner">
          <Library key='1' setList={setList}/>
          <Canvas  key='2' mylist={list1} setList={setList}/>
        </div>
        </div>
    </div>
  );
}

export default App;
