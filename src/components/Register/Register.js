import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='App'>
            <h1>Registration Form</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" id='email' />
                <br />
                <label htmlFor="password">PAssword: </label>
                <input type="password" id='password' />

                <br /><br />
                <input type="button" value="Register" className='btn-cart' />
            </form>
            <Link to="/login"><h3>Already have an account?</h3></Link>
            <br /><br />
            <button className='btn-cart'>Gmail Signup</button>
        </div>
    );
};

export default Register;