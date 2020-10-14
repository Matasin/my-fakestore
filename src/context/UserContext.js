import React, {useState, useEffect, createContext } from 'react';

export const UserContext = createContext({});

export const UserContextProvider = ( props ) => {
    const [ userData, setUserData ] = useState([]); 
    // const [ cart, setCart ] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(response => response.json())
            .then(data => setUserData(data))
    }, []);

    const { Provider } = UserContext;
    return (
        <Provider value={ { userData, setUserData } }>
            {props.children}
        </Provider>
    )
};