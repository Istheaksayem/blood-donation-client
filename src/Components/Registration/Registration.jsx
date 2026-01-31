import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaUserPlus, FaCloudUploadAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Registration = () => {
    const { register, watch, formState: { errors }, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [districts, setDistricts] = useState([]);
    const [upazilas,setUpazilas] =useState([])


    useEffect(() => {
        fetch('/districts.json')
            .then(res => res.json())
            .then(data => {
                setDistricts(data);
            })
            .catch(err => console.error("Error loading districts:", err));
    }, []);
    useEffect(() => {
        fetch('/upazilas.json')
            .then(res => res.json())
            .then(data => {
                setUpazilas(data);
            })
            .catch(err => console.error("Error loading districts:", err));
    }, []);


    const password = watch("password");

    const onSubmit = (data) => {
        setLoading(true);
        console.log("Form Data:", data);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white rounded-[30px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

                {/* Side Banner */}
                <div className="hidden md:flex md:w-1/3 bg-red-600 p-10 flex-col justify-center text-white text-center">
                    <FaUserPlus className="text-6xl mx-auto mb-6" />
                    <h2 className="text-3xl font-bold">Join Our Lifesaving Community</h2>
                    <p className="mt-4 opacity-80">Every donation can save up to three lives. Start your journey today.</p>
                </div>

                {/* Form Section */}
                <div className="p-8 md:p-12 md:w-2/3">
                    <h2 className="text-3xl font-black text-gray-800 mb-8">Create Donor Account</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Name */}
                        <div className="form-control">
                            <label className="label-text font-semibold mb-2">Full Name</label>
                            <input {...register("name", { required: "Name is required" })} type="text" placeholder="Your Name" className={`input input-bordered focus:border-red-500 ${errors.name ? 'border-red-500' : ''}`} />
                            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label-text font-semibold mb-2">Email Address</label>
                            <input {...register("email", { required: "Email is required" })} type="email" placeholder="Please enter your email" className="input input-bordered focus:border-red-500" />
                        </div>

                        {/* Avatar */}
                        <div className="form-control md:col-span-2">
                            <label className="label-text font-semibold mb-2">Profile Picture</label>
                            <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-4 hover:border-red-400 transition-colors text-center">
                                <input {...register("avatar", { required: "Image is required" })} type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                <div className="flex items-center justify-center gap-3 text-gray-500">
                                    <FaCloudUploadAlt className="text-2xl text-red-500" />
                                    <span>Click to upload your avatar</span>
                                </div>
                            </div>
                        </div>

                        {/* Blood Group */}
                        <div className="form-control">
                            <label className="label-text font-semibold mb-2">Blood Group</label>
                            <select {...register("bloodGroup", { required: true })} className="select select-bordered focus:border-red-500">
                                <option value="">Select Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>

                        {/* District - Dynamic from JSON */}
                        <div className="form-control">
                            <label className="label-text font-semibold mb-2">District</label>
                            <select {...register("district", { required: "Select a district" })} className="select select-bordered focus:border-red-500">
                                <option value="">Select District</option>
                                {districts.map((district) => (
                                    <option key={district.id} value={district.name}>
                                        {district.name} ({district.bn_name})
                                    </option>
                                ))}
                            </select>
                            {errors.district && <span className="text-red-500 text-xs mt-1">{errors.district.message}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label-text font-semibold mb-2">Upazila</label>
                              <select {...register("district", { required: "Select a district" })} className="select select-bordered focus:border-red-500">
                                <option value="">Select District</option>
                                {upazilas.map((upazila) => (
                                    <option key={upazila.id} value={upazila.name}>
                                        {upazila.name} ({upazila.bn_name})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label-text font-semibold mb-2">Password</label>
                            <input {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 chars" } })} type="password" placeholder="Enter your password" className="input input-bordered" />
                        </div>

                        {/* Confirm Password */}
                        <div className="form-control">
                            <label className="label-text font-semibold mb-2">Confirm Password</label>
                            <input
                                {...register("confirm_password", {
                                    required: "Please confirm password",
                                    validate: value => value === password || "Passwords do not match"
                                })}
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered"
                            />
                            {errors.confirm_password && <span className="text-red-500 text-xs mt-1">{errors.confirm_password.message}</span>}
                        </div>

                        <div className="md:col-span-2 mt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn bg-red-600 hover:bg-red-700 text-white w-full border-none rounded-xl text-lg"
                            >
                                {loading ? <span className="loading loading-spinner"></span> : "Register as Donor"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-gray-600">
                        Already have an account? <Link to="/login" className="text-red-600 font-bold hover:underline">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;