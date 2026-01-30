import React from 'react';
import { FaHeartbeat, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';

const FeaturedSection = () => {
    const features = [
        {
            id: 1,
            icon: <FaHeartbeat className="text-4xl text-red-600" />,
            title: "Quick Response",
            description: "Our system matches you with the nearest donors in real-time during emergencies."
        },
        {
            id: 2,
            icon: <FaUsers className="text-4xl text-red-600" />,
            title: "Verified Donors",
            description: "We maintain a database of verified and healthy donors to ensure safety."
        },
        {
            id: 3,
            icon: <FaHandHoldingHeart className="text-4xl text-red-600" />,
            title: "Free of Cost",
            description: "PulseAid is a non-profit platform. We believe blood should never be for sale."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3">Features</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900">Why PulseAid Matters?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature) => (
                        <div key={feature.id} className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-red-100 transition-all duration-500 group">
                            <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;