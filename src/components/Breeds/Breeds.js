import React, { useEffect, useState,useContext } from 'react';
import { userContext } from '../../App';
import Breed from '../Breed/Breed';
import './Breeds.css';

const Breeds = () => {
    const [allBreed, setAllBreed]=useContext(userContext);

    useEffect(()=>{
        fetch(`https://api.thedogapi.com/v1/breeds`)
        .then(res=>res.json())
        .then(data=>setAllBreed(data))
    },[])
    const twentyBreeds= allBreed.slice(0,20);
    
    return (
        <div className="full-breeds-area">
            <div className="container">
                <div className="row">
                    {
                      twentyBreeds.map(event=> <div className="col-md-3"><Breed event={event}></Breed></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Breeds;