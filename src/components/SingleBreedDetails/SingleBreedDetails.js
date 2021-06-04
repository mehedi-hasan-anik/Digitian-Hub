import React, { useEffect, useState,useContext} from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import './SingleBreedDetails.css';

const SingleBreedDetails = () => {
    const [newBreed,setNewBreed]=useState([])
    const{singleName}=useParams();

    useEffect(()=>{
        fetch(`https://api.thedogapi.com/v1/breeds`)
        .then(res=>res.json())
        .then(data=>setNewBreed(data))
    },[])
    const newTwentyBreeds= newBreed.slice(0,20);
    const found = newTwentyBreeds.find(Element => Element.name.toString() === singleName.toString());
    
    console.log("result",found);
    return (
        <div className="full-single-breed-details"> 
            <div className="container">
                {
                    found && <div className="row cart-area">
                    <div className="col-md-6 cart-area-left">
                        <img src={found.image.url} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 cart-area-right">
                        <h1>Name : {found.name}</h1>
                        <p> Bred For : {found.bred_for}</p>
                        <p>breed_group : {found.breed_group}</p>
                        <p>Origin : {found.origin}</p>
                        <p>height :  {found.height.metric} metric</p>
                        <p>weight :  {found.weight.metric} metric</p>
                        <p>life span : {found.life_span}</p>
                        <p>Temperament : {found.temperament}</p>
                       
                    </div>
                </div>
                }
            </div>  
        </div>
    );
};

export default SingleBreedDetails;