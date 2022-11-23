import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <header className='header'>
            <h1>Welcome to the Works of Zac Schneider!</h1>
            <Navigation></Navigation>
        </header>
    );
}

export default Header;