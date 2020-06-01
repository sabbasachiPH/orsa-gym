import React from 'react';
import './Home.css';

import About from './About';
import WhyUs from './WhyUs';
import Trainning from './Trainning';
import Welcome from './We;'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
        
            <Welcome></Welcome>
                <About></About>
            {/* <Trainning></Trainning> */}
            <WhyUs></WhyUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;