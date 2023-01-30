import React from "react";
import { Link } from "react-router-dom";
import "../../styles/LandingPage.css";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";

export default function LandingPageComponent() {
    return (
        <div className="contenedorLanding">
            <h1>THE DOG API</h1>
            <h4>By Tomas Di Bacco</h4>
            <small>Made in August-2022</small>
            <Link to="/home"><h2>START</h2></Link>
            <FooterContainer />
        </div>
    )
};

