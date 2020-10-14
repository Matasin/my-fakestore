import React from 'react';
import './Profile.scss';

import { useHistory } from 'react-router-dom';
import PleasLogIn  from '../../components/Please-Log-In'
import ProfileInfo from '../../components/Profile-Info'
 
const Profile = () => {
    let history = useHistory();
    const localData = localStorage.getItem('user'); //get item from localstorage
    const user = JSON.parse(localData); //Data about current user

    if(!user) return <PleasLogIn/> 

    const logOut = () => {
        localStorage.removeItem('user');
        history.push('/')
        history.go(0);
    }
    
    return (
        <div className='Profile'>
            <div className='Profile-Container'>
                <ProfileInfo/>
            </div>
            <button 
                className='Log-Out-Button'
                onClick={logOut}
            >
                Log out
            </button>
        </div>
    )
}
export default Profile
