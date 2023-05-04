import React from 'react';
import './header.scss';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    return (
        <div className='header'>
            <div className='logo-app'>MERN-Blog</div>
            <div className='menu-item' onClick={() => history.push('login')}>Logout</div>
        </div>
    )
}

export default Header