import React from 'react';

import ProfileInfoLeft from './Profile-Info-Left'
import ProfileInfoRight from './Profile-Info-Right';

const ProfileInfo = () => {
    const localData = localStorage.getItem('user'); //get item from localstorage
    const user = JSON.parse(localData); //Data about current user

    return (
        <>
            <ProfileInfoLeft
                user= {user}
            />
            <ProfileInfoRight
                user= {user}
            />
        </>
    )
}
export default ProfileInfo
