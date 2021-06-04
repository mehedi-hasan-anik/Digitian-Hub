import React from 'react';
import { useHistory } from 'react-router';
import './Breed.css';

const Breed = ({event}) => {
    console.log("anik",event);
    const history = useHistory();

    const details= name =>{
      const url=`/breed/${name}`;
      history.push(url);
    }

    return (
        <div className="full-breed-area">
                <div className=" container inner-full-breed-area">
                    <img src={event.image.url} className="img-fluid" alt="" />
                    <div className="inner-full-breed-text-area">
                        <h4>{event.name}</h4>
                        <button onClick={()=> details(event.name)}>Details</button>
                    </div>
                </div>
        </div>
    );
};

export default Breed;