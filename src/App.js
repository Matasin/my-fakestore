import React from 'react';
import './styles/transitions.scss';

import { UserContextProvider } from './context/UserContext'
import { CartContextProvider } from './context/CartContext'

import Routes from './routes/Routes'


const App = () => (
    <UserContextProvider>

        <CartContextProvider>

            <Routes/>

        </CartContextProvider>

    </UserContextProvider>
);

export default App;
