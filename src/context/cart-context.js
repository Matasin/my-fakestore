import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState(() => {
        const localData = localStorage.getItem('items');
        return localData ? JSON.parse(localData) : [];
    });


    useEffect(() => {
        const tab = [...items];
        const newTab = [{}];

        for (let i = 0; i < tab.length; i++) {
            const temp = tab[i];

            if (newTab[temp.id] !== undefined) {
                newTab[temp.id].quantity += temp.quantity
            } else {
                newTab[temp.id] = temp
            }
        }
        console.log(newTab)

        localStorage.setItem('items', JSON.stringify(items));
    }, [items])


    const { Provider } = CartContext;

    return (
        <Provider value={[items, setItems]}>
            {children}
        </Provider>
    )
}


// const tab = [...items];
// const newTab = {};

// for (let i = 0; i < tab.length; i++) {
//     const temp = tab[i];

//     if (newTab[temp.id] !== undefined) {
//         newTab[temp.id].quantity += temp.quantity
//     } else {
//         newTab[temp.id] = temp
//     }
// }
// console.log(newTab)