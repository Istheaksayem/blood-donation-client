import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSignInAlt, FaLock } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        console.log("Login Data:", data);
        
        // এখানে আপনার ব্যাকএন্ড লগইন এপিআই কল করবেন
        setTimeout(() => {
            setLoading(false);
            alert("Login logic goes here!");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white rounded-[30px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
                
                {/* Side Banner (Left Side) */}
                <div className="hidden md:flex md:w-1/3 bg-red-600 p-10 flex-col justify-center text-white text-center">
                    <FaLock className="text-6xl mx-auto mb-6" />
                    <h2 className="text-3xl font-bold">Welcome Back!</h2>
                    <p className="mt-4 opacity-80">
                        Log in to manage your donations and help save lives today.
                    </p>
                </div>

                {/* Login Form Section */}
                <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                    <div className="mb-10">
                        <h2 className="text-3xl font-black text-gray-800">Donor Login</h2>
                        <p className="text-gray-500 mt-2">Enter your credentials to access your account</p>
                    </div>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        
                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label-text font-semibold mb-2">Email Address</label>
                            <input 
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })} 
                                type="email" 
                                placeholder="name@example.com" 
                                className={`input input-bordered focus:border-red-500 w-full ${errors.email ? 'border-red-500' : ''}`} 
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <div className="flex justify-between items-center mb-2">
                                <label className="label-text font-semibold">Password</label>
                                <a href="#" className="text-xs text-red-600 hover:underline">Forgot Password?</a>
                            </div>
                            <input 
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                                })} 
                                type="password" 
                                placeholder="••••••••" 
                                className={`input input-bordered focus:border-red-500 w-full ${errors.password ? 'border-red-500' : ''}`} 
                            />
                            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                        </div>

                        {/* Login Button */}
                        <div className="mt-8">
                            <button 
                                type="submit"
                                disabled={loading}
                                className="btn bg-red-600 hover:bg-red-700 text-white w-full border-none rounded-xl text-lg flex items-center gap-2"
                            >
                                {loading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    <>
                                        <FaSignInAlt /> Login Now
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Navigation to Registration */}
                    <div className="mt-10 text-center border-t pt-6">
                        <p className="text-gray-600">
                            New to the community? 
                            <Link to="/registration" className="text-red-600 font-bold hover:underline ml-1">
                                Create an Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;