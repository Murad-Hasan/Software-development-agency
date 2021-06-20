import React from 'react';
import './Header.css'
import HeroSection from './HeroSection/HeroSection';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className='header'>
            <NavBar/>
            <HeroSection/>
        </div>
    );
};

export default Header;