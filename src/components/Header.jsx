import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo"/>
        </header>
    );
}

export default Header;
