import React from 'react';
import Breeds from '../Breeds/Breeds';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="continer">
                <Slider></Slider>
                <Breeds></Breeds>
            </div>
        </div>
    );
};

export default Home;