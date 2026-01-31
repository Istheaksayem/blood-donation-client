import React, { useState, useEffect, } from 'react';
import { useForm } from 'react-hook-form';
import { FaUserPlus, } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../Hook/UseAuth';
import { toast } from 'react-toastify';

const Registration = () => {

    const { registerUser, setLoading } = useAuth()
    const navigate = useNavigate();
    const { register, watch, handleSubmit } = useForm();
    const [loading, setLocalLoading] = useState(false);
    const [districts, setDistricts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);

    useEffect(() => {
        fetch('/districts.json')
            .then(res => res.json())
            .then(setDistricts);
    }, []);

    useEffect(() => {
        fetch('/upazilas.json')
            .then(res => res.json())
            .then(setUpazilas);
    }, []);

    const password = watch("password");

    const handleRegistration = (data) => {
        setLocalLoading(true);

        registerUser(data.email, data.password)
            .then(result => {
                console.log("User Created:", result.user);
                // ✅ success toast
                toast.success("Registration successful! 🎉");

                // ✅ navigate to home
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            })
            .catch(error => {
                console.error(error.message);
            })
            .finally(() => {
                setLocalLoading(false);
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white rounded-[30px] shadow-2xl flex flex-col md:flex-row">

                {/* Side Banner */}
                <div className="hidden md:flex md:w-1/3 bg-red-600 p-10 flex-col justify-center text-white text-center">
                    <FaUserPlus className="text-6xl mx-auto mb-6" />
                    <h2 className="text-3xl font-bold">Join Our Lifesaving Community</h2>
                </div>

                {/* Form */}
                <div className="p-8 md:p-12 md:w-2/3">
                    <h2 className="text-3xl font-black mb-8">Create Donor Account</h2>

                    <form onSubmit={handleSubmit(handleRegistration)} className="grid md:grid-cols-2 gap-5">

                        <input {...register("name", { required: true })} placeholder="Full Name" className="input input-bordered" />

                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered" />

                        <div className="md:col-span-2">
                            <input {...register("avatar", { required: true })} type="file" />
                        </div>

                        <select {...register("bloodGroup", { required: true })} className="select select-bordered">
                            <option value="">Blood Group</option>
                            <option>A+</option><option>A-</option>
                            <option>B+</option><option>B-</option>
                            <option>AB+</option><option>AB-</option>
                            <option>O+</option><option>O-</option>
                        </select>

                        <select {...register("district", { required: true })} className="select select-bordered">
                            <option value="">District</option>
                            {districts.map(d => (
                                <option key={d.id} value={d.name}>{d.name}</option>
                            ))}
                        </select>

                        <select {...register("upazila", { required: true })} className="select select-bordered">
                            <option value="">Upazila</option>
                            {upazilas.map(u => (
                                <option key={u.id} value={u.name}>{u.name}</option>
                            ))}
                        </select>

                        <input {...register("password", { required: true, minLength: 6 })} autoComplete="off"
                            type="password" placeholder="Password" className="input input-bordered" />

                        <input
                            {...register("confirm_password", {
                                validate: value => value === password
                            })}
                            type="password"
                            placeholder="Confirm Password"
                            className="input input-bordered"
                        />

                        <div className="md:col-span-2">
                            <button className="btn bg-red-600 text-white w-full" disabled={loading}>
                                {loading ? "Creating..." : "Register"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-6 text-center">
                        Already have an account?
                        <Link to="/login" className="text-red-600 font-bold ml-1">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;