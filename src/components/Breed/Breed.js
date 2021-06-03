import React from 'react';
import { useHistory } from 'react-router';
import './Breed.css';

const Breed = ({event}) => {
    console.log("anik",event.id);
    const history = useHistory();
    
    const details= id =>{
      const url=`/single/${id}`;
      history.push(url);
    }

    return (
        <div>
            <div className="container">
                
                <img src={event.image.url} className="img-fluid" alt="" />
                <h1>{event.name}</h1>
                <button onClick={()=> details(event.id)}>Details</button>
            </div>
        </div>
    );
};

export default Breed;