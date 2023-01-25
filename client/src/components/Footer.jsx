import React from "react";
import "../styles/Footer.css";
// import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div className="contenedorFooter">
            <img className="imgHenry" src={require("../img/logoHenry.png").default} alt=""/>
            <p> 
                <img src={require("../img/LinkedinLogo.png").default} alt="" width="16px" height="16px"/>
                <a href="https://www.linkedin.com/in/tomas-di-bacco/" target="_blank" rel="noreferrer"> By Tomas Di Bacoo </a>
            </p>
            <img className="imgLogoDog" src={require("../img/dog.png").default} alt=""/>
            
        </div>
    )
}
