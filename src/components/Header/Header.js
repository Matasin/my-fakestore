import React, { useRef } from 'react';
import './Header.scss'
import { CSSTransition } from 'react-transition-group';

const Header = ( {Hindex, text, className, style} ) => {
    const nodeRef = useRef(null);
    return (
        <CSSTransition
            in= { true }
            appear = { true }
            timeout= { 1000 }
            classNames= { 'Header' }
            nodeRef= { nodeRef }
        >
            <Hindex 
                ref= { nodeRef }
                className= {className}
                style= {style}
            >
                {text}
            </Hindex>
        </CSSTransition>
    )
}
export default Header;