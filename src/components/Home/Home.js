import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Breeds from '../Breeds/Breeds';
import Contact from '../Contcat/Contact';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="continer">
                <Slider></Slider>
                <Breeds></Breeds>
                <AboutUs></AboutUs>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;