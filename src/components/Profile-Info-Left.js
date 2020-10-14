import React from 'react';
 
const ProfileInfoLeft = ( { user } ) => (
    <div className='Profile-Info-Left'>
        <h2>
            Hello, {user.name.firstname}
        </h2>
        <img src={process.env.PUBLIC_URL + '/assets/user.jpg'} alt='user avatar'/>
        <p>Username: {user.username}</p>
    </div>
)

export default ProfileInfoLeft
