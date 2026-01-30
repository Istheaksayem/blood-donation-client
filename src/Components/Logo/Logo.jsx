import React from 'react';
import logo from '../../assets/ChatGPT Image Jan 30, 2026, 09_28_23 AM.png'

const Logo = () => {
    return (
        <img
            src={logo}
            alt="Blood Donation App Logo"
            className="h-12 md:h-16 w-auto object-contain block rounded-2xl" />
    );
};

export default Logo;