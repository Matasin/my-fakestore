import React from 'react';

const FormInputs = ( { email, handleEmail, password, handlePassword } ) => (
    <>
        <p>E-mail</p>
        <input 
            type='email' 
            name='email'
            placeholder='Enter email'
            value={email}
            onChange={handleEmail}
            autoComplete='email'
            required
        />
        <p>Password</p>
        <input 
            type='password' 
            name='password'
            placeholder='Enter password'
            value={password}
            onChange={handlePassword}
            autoComplete='password'
            required
        />
    </>
)
export default FormInputs