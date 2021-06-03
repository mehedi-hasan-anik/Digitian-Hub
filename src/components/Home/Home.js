import React from 'react';
import Breeds from '../Breeds/Breeds';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="continer">
                <Breeds></Breeds>
            </div>
        </div>
    );
};

export default Home;