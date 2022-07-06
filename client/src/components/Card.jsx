import React from "react";
import "../styles/Card.css";

export default function CardDog({id, name, weight_min, weight_max, temperament, image}){

    return (
            <div className="cardDog">
                <h3>{name}</h3>
                <a href={`http://localhost:3000/dogs/${id}`}><img src={image} alt="img not found" width="200px" height="250px"/></a>
                <h5>Weight: {weight_min} - {weight_max}</h5>
                <h5>Termperaments: {temperament}</h5>
            </div>
           
    );
};