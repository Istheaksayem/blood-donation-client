import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                {/* Brand & Mission */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Logo />
                        <span className="text-2xl font-black text-white">Pulse<span className="text-red-500">Aid</span></span>
                    </div>
                    <p className="text-sm leading-relaxed opacity-80">
                        PulseAid is a non-profit blood donation platform dedicated to connecting donors with those in urgent need. We believe every drop of blood is a gift of life.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-all duration-300 text-white"><FaFacebookF /></a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-all duration-300 text-white"><FaTwitter /></a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-all duration-300 text-white"><FaInstagram /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-red-600 pl-3">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link to="/search" className="hover:text-red-500 transition-colors">Find Donors</Link></li>
                        <li><Link to="/donation-requests" className="hover:text-red-500 transition-colors">Blood Requests</Link></li>
                        <li><Link to="/blog" className="hover:text-red-500 transition-colors">Health Blogs</Link></li>
                        <li><Link to="/faq" className="hover:text-red-500 transition-colors">FAQs</Link></li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-red-600 pl-3">Support</h3>
                    <ul className="space-y-3">
                        <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
                        <li><Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link></li>
                        <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-red-600 pl-3">Get in Touch</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <FaPhoneAlt className="text-red-500 mt-1" />
                            <span>+880 1234 567 890</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaEnvelope className="text-red-500 mt-1" />
                            <span>support@pulseaid.com</span>
                        </li>
                        <li className="text-sm opacity-80 leading-snug mt-4 font-light">
                            House 12, Road 5, Dhanmondi,<br /> Dhaka, Bangladesh.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-6 text-center text-sm opacity-60">
                <p>&copy; {currentYear} PulseAid. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;