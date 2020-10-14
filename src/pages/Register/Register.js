import React from 'react';
import './Register.scss';

import Header from '../../components/Header/Header'

const Register = () => {
    return (
        <div className='Register'>
            <form>
                <Header 
                    Hindex= {'h1'}
                    text= {'Lorem ipsum'}
                    className= {'Logo-Form'}
                />
                <p>Login or E-mail</p>
                <input type='text' />

                <p>Password</p>
                <input type='password' id='password'/> 
                <br />

                <button type="submit" className='Register-Button'>Register</button>
                <br />


                <h1>REGISTERRRRRR</h1>
            </form> 
        </div>
    )
}
export default Register;