import React, { useContext, useState } from 'react';
import './Login.scss';

import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import FormInputs from '../../components/Form-Inputs'

import { UserContext } from '../../context/UserContext'


const Login = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorLogin, setErrorLogin ] = useState(false);
    let history = useHistory();

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };
    const handleSubmitData = (e) => {
        e.preventDefault();
        setEmail(email);
        setPassword(password);

        userData.map(user => {
            if(user.email === email && user.password === password){
                setUserData(user);

                localStorage.setItem('user', JSON.stringify(user));

                history.push('/profile');
                history.go(0) //refresing for uploadnavbar items
            }
            else {
                setErrorLogin(true);
            }
            return user;
        })
    };
    // kevin@gmail.com
    // kev02937@
    return (
        <div className='Login'>
            <form onSubmit={handleSubmitData}>
                <Header
                    Hindex= {'h1'}
                    text= {'Lorem ipsum'}
                    className='Logo-Form'
                />
                {errorLogin ? 
                    (
                        <div id='errorLogin'>
                            Seems like e-mail or password is incorrect
                        </div>
                    ) : null
                }
                <FormInputs
                    email= {email}
                    handleEmail= {handleEmail}
                    password= {password}
                    handlePassword= {handlePassword}
                />
                <p> 
                    Correct user: <br/>
                    Email: kevin@gmail.com <br/>
                    Password: kev02937@
                </p>
                <button className='Login-Button'>Login</button>
                <p>You don't have account? </p>
                <Link to='/register'>Click Here!</Link>
            </form> 
        </div>
    )
}
export default Login;
