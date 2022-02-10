import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className='header-container'>
            <div className='logo-div'>
                <img src={logo} alt="" className="logo" />
            </div>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/register">Register</Link>
                {user.email && <span>Hello {user.displayName}</span>}
                {user.email ? <button onClick={logOut}> Logout</button> : <Link to="/login">Login</Link>}
            </nav>

        </div>
    );
};

export default Header;