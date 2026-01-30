import React from 'react';
import { useNavigate } from 'react-router';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-100 to-red-200">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge or Small Title */}
                <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-red-600 uppercase bg-red-100 rounded-full">
                    Every Drop Counts
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Saving Lives Starts <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400">
                        With Your Pulse.
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
                    Join our mission to connect life-savers with those in need.
                    Whether you want to donate or you're looking for help, we are here for you.
                </p>

                {/* Unique Button Styles */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                    <button
                        onClick={() => navigate('/registration')}
                        className="group relative px-8 py-4 font-bold text-white transition-all duration-300 bg-red-600 rounded-xl hover:bg-red-700 hover:shadow-[0_10px_20px_-10px_rgba(220,38,38,0.5)] active:scale-95"
                    >
                        Join as a donor
                    </button>

                    <button
                        onClick={() => navigate('/search')}
                        className="px-8 py-4 font-bold text-gray-700 transition-all duration-300 border-2 border-gray-200 bg-white/50 backdrop-blur-sm rounded-xl hover:border-red-600 hover:text-red-600 active:scale-95"
                    >
                        Search Donors
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;