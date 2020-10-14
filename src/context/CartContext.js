import React, {useState, createContext } from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ( props ) => {
    const [ cart, setCart ] = useState([]);

    const { Provider } = CartContext;
    return (
        <Provider value={ { cart, setCart } }>
            {props.children}
        </Provider>
    )
};