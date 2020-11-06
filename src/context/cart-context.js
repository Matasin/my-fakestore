import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [items, setItems] = useState(() => {
        const localData = localStorage.getItem('items');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items])

    const { Provider } = CartContext;
    return (
        <Provider value={[items, setItems]}>
            {children}
        </Provider>
    )
}