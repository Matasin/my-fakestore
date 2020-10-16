import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { NAVBAR_ITEMS } from '../constants/constants'

const NavbarItem = ({ setIsOpen, isOpen }) => {

    const localData = localStorage.getItem('user'); //get item from localstorage
    const localDataUser = JSON.parse(localData);
    let history = useHistory();

    const logOut = () => {
        localStorage.removeItem('user');
        history.push('/');
        history.go(0);
    }

    return (
        <div  className={`Navbar-Items-Container ${isOpen ? 'Navbar--Active' : ''}`}>
            {NAVBAR_ITEMS.map( ({ id, name, path }) => {
                if(localDataUser) {
                    if(name === 'login') {
                        return (
                            <Link 
                                to={path} 
                                className='Navbar-Item' 
                                key={id} 
                                onClick={logOut}
                            >
                                <li>
                                    logout
                                </li>
                            </Link>
                        )
                    }
                }
                return(
                    <Link to={path} className='Navbar-Item' key={id}>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            {name}
                        </li>
                    </Link>
                )
            })}
        </div>
    )
}
export default NavbarItem
