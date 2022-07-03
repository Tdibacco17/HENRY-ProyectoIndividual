import React from "react";
import {Link} from "react-router-dom";
import "../styles/LandingPage.css";

export default function LandingPage(){
    return(
        <div>
            <Link to="/home">
                <button className="landingBtn"> NEXT </button>
            </Link>
        </div>
    )
};
