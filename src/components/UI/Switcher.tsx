import React from 'react'
import './Switcher.scss'
import SwitcherButton from './SwitcherButton'
const Switcher = () => {
const [active, setActive] = React.useState(false);
function handleClick() {
    console.log('clicked');
    setActive(!active);
}
  return (
    <div className='switcher-conteiner'>
        <div className='switcher'>
            <SwitcherButton img={'img'} title={'Runtime'} active={active} handleClick={handleClick}></SwitcherButton>
            <SwitcherButton img={'img'} title={'Constructor'} active={!active} handleClick={handleClick}></SwitcherButton>
        </div>
    </div>
  )
}

export default Switcher
