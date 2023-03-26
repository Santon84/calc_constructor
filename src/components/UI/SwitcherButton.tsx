import React from 'react'
import './SwitcherButton.scss'


interface SwitcherButtonProps {

    img: string;
    title: string;
    active: boolean;
    handleClick: () => void;
}

const SwitcherButton:React.FC<SwitcherButtonProps> = ({img, title, active, handleClick}) => {
    const activeClass = 'switcher-button ' + (active ? 'switcher-button_active': '');
    
  
    return (
    <>
      <button className={activeClass} onClick={handleClick}>{title}</button>
     
    </>
  )
}

export default SwitcherButton
