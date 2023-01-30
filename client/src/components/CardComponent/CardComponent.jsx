import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Card.css";

export default function CardComponent({ id, name, weight_min, weight_max, temperament, image }) {

    return (
        <div className="cardDog">
            <h3>{name}</h3>
            <Link to={`/dogs/${id}`}>
                <img src={image} alt="img not found" width="200px" height="250px" />
            </Link>
            <h5>Weight: {weight_min} - {weight_max}</h5>
            <h5>Temperaments: {temperament}</h5>
        </div>
    );
};