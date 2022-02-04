import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo-div'>
                <img src={logo} alt="" className="logo" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </nav>

        </div>
    );
};

export default Header;