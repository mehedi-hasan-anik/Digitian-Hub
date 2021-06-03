import React, { useEffect, useState,useContext} from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import './SingleBreedDetails.css';

const SingleBreedDetails = () => {
    const [allBreed, setAllBreed]=useContext(userContext);
    const{singleId}=useParams();
    const found = allBreed.find(Element => Element.id.toString() === singleId.toString());
    console.log("result",found);
    return (
        <div> 
            <div className="container">
                {
                    found && <div className="row cart-area">
                    <div className="col-md-6">
                        <img src={found.image.url} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1>Name : {found.name}</h1>
                        <p>{found.bred_for}</p>
                        <p>Group : {found.breed_group}</p>
                        <p>Origin : {found.origin}</p>
                        <p>height : {found.height.imperial} and {found.height.metric}</p>
                        <p>weight : {found.weight.imperial} and {found.weight.metric}</p>
                        <p>Life : {found.life_span}</p>
                        <p>Temperament : {found.temperament}</p>
                       
                    </div>
                </div>
                }
            </div>  
        </div>
    );
};

export default SingleBreedDetails;