import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Card.css";

export default function CardComponent({ id, name, weight_min, weight_max, temperament, image }) {

    return (
        <div className="cardDog">
            <Link to={`/dogs/${id}`}>
                <img src={image} alt="img not found" width="200px" height="250px" />
            </Link>
            <div className="card_body">
                <h3>{name}</h3>
                <small>Min {weight_min} kg - Max {weight_max} kg </small>
                <small>{temperament}</small>
            </div>
        </div>
    );
};