import React from 'react';
import './styles/main.css';

import Routes from './routes/routes';
import { CartProvider } from './context/cart-context'

const App = () => {
    return (
        <CartProvider>
            <Routes />
        </CartProvider>
    )

}

export default App;
