import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import FeaturedSection from '../../../Components/FeaturedSection/FeaturedSection';
import ContactSection from '../../../Components/ContactSection/ContactSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedSection></FeaturedSection>
           <ContactSection></ContactSection>
        </div>
    );
};

export default Home;