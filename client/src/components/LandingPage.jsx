import React from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import "../styles/LandingPage.css";

export default function LandingPage(){
    return(
        <div className="contenedorLanding">
                <div>
                    <Link to="/home">
                        <button className="landingBtn"> START </button>
                    </Link>
                </div>
            <p className="byTomas">By Tomas Di Bacco</p>
            <Footer/>
        </div>
    )
};
