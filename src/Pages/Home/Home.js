import React from 'react';
import ComprehensiveFeatures from '../../components/ComprehensiveFeatures/ComprehensiveFeatures';
import Services from '../../components/Services/Services';
import TakaYourBusiness from '../../components/TakaYourBusiness/TakaYourBusiness';
import Testimonial from '../../components/Testimonial/Testimonial';
import TrySoftWare from '../../components/TrySoftware/TrySoftWare';
import Header from '../../Shared/Header/Header';

const Home = () => {
    return (
        <main>
            <Header/>
            <TakaYourBusiness/>
            <Services/>
            <ComprehensiveFeatures/>
            <TrySoftWare/>
            <Testimonial/>
        </main>
    );
};

export default Home;