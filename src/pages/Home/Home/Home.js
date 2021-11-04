import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointbanner from '../Appointbanner/Appointbanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Appointbanner></Appointbanner>
        </div>
    );
};

export default Home;