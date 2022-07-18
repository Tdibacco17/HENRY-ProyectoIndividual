import React from "react";
import "../styles/Footer.css";
// import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div className="contenedorFooter">
            <img src={require("../img/logoHenry.png").default} alt=""/>
            <p> 
                <img src={require("../img/LinkedinLogo.png").default} alt="" width="16px" height="16px"/>
                <a href="https://www.linkedin.com/in/tomas-di-bacco-20a7a7240/" target="_blank"> By Tomas Di Bacoo </a>
            </p>
            <img src={require("../img/dog.png").default} alt=""/>
            
        </div>
    )
}