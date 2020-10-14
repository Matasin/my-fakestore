import React from 'react';
import { Link } from 'react-router-dom'

const PleaseLogIn = () => (
    <div className='When-DidNot-Catch-Content'>
        <h4>If you want to see this section</h4>
        <span>Please {' '}</span>
        <Link
            to='/login'
        >
            log in
        </Link>
        <br/>
        <span>Or create account {' '}</span>
        <Link
            to='/register'
        >
            register
        </Link>
    </div>
)
export default PleaseLogIn