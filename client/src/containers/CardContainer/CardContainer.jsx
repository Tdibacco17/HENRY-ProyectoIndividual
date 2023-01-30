import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";

export default function CardContainer({ id, name, weight_min, weight_max, temperament, image }) {

    return <CardComponent id={id} name={name} weight_min={weight_min} weight_max={weight_max} image={image} temperament={temperament} />
};