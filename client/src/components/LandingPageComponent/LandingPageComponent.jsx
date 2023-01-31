import React from "react";
import { Link } from "react-router-dom";
import "../../styles/LandingPage.css";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";
import { useEffect } from "react";
import { getAllDogs, getTemperaments } from "../../actions/index";
import { useDispatch } from "react-redux";

export default function LandingPageComponent() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getTemperaments());
        // eslint-disable-next-line
    }, [])



    return (
        <div className="fondo_landing">
            <div className="contenedorLanding">
                <h1>THE DOG API</h1>
                <h4>By Tomas Di Bacco</h4>
                <Link to="/home"><h2>START</h2></Link>
                <FooterContainer />
            </div>
        </div>
    )
};

