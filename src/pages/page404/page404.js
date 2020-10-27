import React from 'react'
import './Page404.scss';

import { Link, useHistory } from 'react-router-dom'


const Page404 = () => {
    let history = useHistory();
    const backToHome = () => {
        history.push('/')
        history.go(0)
    }
    return (
        <div className='error'>
            <h3>404 Not page found</h3>
            <Link
                to='/'
                onClick={backToHome}
            >
                Go to  Home
        </Link>
        </div>
    )
}

export default Page404;