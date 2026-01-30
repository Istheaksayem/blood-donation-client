import React from 'react';

import Logo from '../../../Components/Logo/Logo';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    // Active link style class
    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-600 font-bold" : "hover:text-red-600 transition-colors"}>Home</NavLink></li>
            <li className="lg:hidden"><NavLink to="/registration">Join as Donor</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-2xl w-52 font-medium border border-red-50">
                        {navLinks}
                    </ul>
                </div>
                
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <Logo />
                    <span className="text-xl md:text-2xl font-black tracking-tight text-gray-800">
                        Pulse<span className="text-red-600">Aid</span>
                    </span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 font-semibold text-gray-600">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-3">
                {/* Registration Link - Hidden on mobile, button on desktop */}
                <Link 
                    to="/registration" 
                    className="hidden md:flex btn btn-ghost text-red-600 hover:bg-red-50 border-none rounded-full"
                >
                    Register
                </Link>

                {/* Main Login/Call to Action Button */}
                <Link 
                    to="/login" 
                    className="btn bg-red-600 hover:bg-red-700 text-white border-none rounded-full px-6 shadow-md shadow-red-200 transition-all duration-300 transform hover:scale-105"
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;