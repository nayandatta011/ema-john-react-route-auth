import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, signInWithGoogle } = useAuth();

    return (
        <div className='App'>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" id='email' />
                <br />
                <label htmlFor="password">PAssword: </label>
                <input type="password" id='password' />

                <br /><br />
                <input type="button" value="Register" className='btn-cart' />
            </form>


            <br /><br />
            <button onClick={signInWithGoogle} className='btn-cart'>Gmail Login</button>
        </div>
    );
};

export default Login;