import React from 'react'
import './Switcher.scss'
import SwitcherButton from './SwitcherButton'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { setRuntime } from '../../store/runtimeStore'
import eye from '../../assets/eye.svg'
import bracket from '../../assets/selector.svg'
const Switcher = () => {
    const  active  = useSelector((state:RootState) => state.runtimeSwitch);
    const dispatch = useDispatch();
//const [active, setActive] = React.useState(false);
function handleClick() {
    console.log('clicked');
    dispatch(setRuntime())
    
}
  return (
    <div className='switcher-conteiner'>
        <div className='switcher'>
            <SwitcherButton img={eye} title={'Runtime'} active={active} handleClick={handleClick}></SwitcherButton>
            <SwitcherButton img={bracket} title={'Constructor'} active={!active} handleClick={handleClick}></SwitcherButton>
        </div>
    </div>
  )
}

export default Switcher
