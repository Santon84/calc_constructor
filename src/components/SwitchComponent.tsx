import React from 'react'


//Components
import Operators from './calcElements/Operators'
import Numbers from './calcElements/Numbers';
import Display from './calcElements/Display';
import EqualButton from './calcElements/EqualButton';
import ClearButton from './calcElements/ClearButton';
import { LibraryComponents } from '../types/types';



const SwitchComponent = (component:LibraryComponents | null) => {


    
    
    function renderComponent(param:string | undefined) {
        if (!param) return null
        
        switch (param) {
            case 'Operators': return <Operators />;
            case 'Numbers': return <Numbers />;
            case 'Display': return <Display />;
            case 'EqualButton': return <EqualButton />;
            case 'ClearButton': return <ClearButton />;
        }
    }
    return (
        <>
             {renderComponent(component?.toString())}
        </>
    )
    
}

export default SwitchComponent
