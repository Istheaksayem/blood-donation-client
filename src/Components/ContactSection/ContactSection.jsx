import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col lg:flex-row">
                    
                    {/* Contact Information (Left Side) */}
                    <div className="lg:w-1/3 bg-red-600 p-10 md:p-14 text-white">
                        <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                        <p className="opacity-90 mb-10 text-lg">
                            Have questions or need urgent blood? Reach out to our 24/7 support team.
                        </p>
                        
                        <div className="space-y-8">
                            <div className="flex items-center gap-5">
                                <div className="p-3 bg-red-500 rounded-lg"><FaPhoneAlt /></div>
                                <div>
                                    <p className="text-sm opacity-70">Call Us Anytime</p>
                                    <p className="font-bold text-xl">+880 1234 567 890</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="p-3 bg-red-500 rounded-lg"><FaEnvelope /></div>
                                <div>
                                    <p className="text-sm opacity-70">Email Address</p>
                                    <p className="font-bold text-xl">help@pulseaid.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="p-3 bg-red-500 rounded-lg"><FaMapMarkerAlt /></div>
                                <div>
                                    <p className="text-sm opacity-70">Our Office</p>
                                    <p className="font-bold uppercase">Dhanmondi, Dhaka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Right Side) */}
                    <div className="lg:w-2/3 p-10 md:p-14">
                        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label font-semibold">Your Name</label>
                                <input type="text" placeholder="John Doe" className="input input-bordered bg-gray-50 focus:border-red-500 outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="input input-bordered bg-gray-50 focus:border-red-500 outline-none" required />
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label font-semibold">Message Subject</label>
                                <input type="text" placeholder="I want to host a blood drive" className="input input-bordered bg-gray-50 focus:border-red-500 outline-none" />
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label font-semibold">Your Message</label>
                                <textarea className="textarea textarea-bordered bg-gray-50 h-32 focus:border-red-500 outline-none" placeholder="Type your message here..."></textarea>
                            </div>
                            <div className="md:col-span-2 mt-4">
                                <button className="btn bg-red-600 hover:bg-red-700 text-white border-none w-full md:w-auto px-12 rounded-xl transition-all">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;