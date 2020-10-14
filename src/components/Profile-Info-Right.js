import React from 'react';

 
const ProfileInfoRight = ( { user } ) => (
    <div className='Profile-Info-Right'>
        <div className='Profile-Info-Right-Column-First'>
            <h4>Your adress</h4>
            <p>{user.address.city}, {user.address.street} {user.address.number}</p>
            <p>Zip code: {user.address.zipcode}</p>
        </div>
        <div className='Profile-Info-Right-Column-Second'>
            <h4>Your data account</h4>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
        <div className='Profile-Info-Right-Column-Third'>
            <h4>Other data</h4>
            <p>Phone: {user.phone}</p>
        </div>
    </div>
)
export default ProfileInfoRight
