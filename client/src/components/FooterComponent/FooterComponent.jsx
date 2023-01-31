import React from "react";
import "../../styles/Footer.css";
import { SiGmail, SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function FooterComponent() {

    return (
        <div className="contenedorFooter">
            <div className="posiciones_foot">
                <div className="container_icons">
                    <a href="mailto:tomasdibacco@gmail.com" rel="noopener noreferrer" target="_blank">
                        <SiGmail className="icon_footer" />
                    </a>
                    <a href="https://github.com/Tdibacco17" rel="noopener noreferrer" target="_blank">
                        <SiGithub className="icon_footer" />
                    </a>
                    <a href="https://www.linkedin.com/in/tomas-di-bacco/" rel="noopener noreferrer" target="_blank">
                        <SiLinkedin className="icon_footer" />
                    </a>
                    <a href="https://wa.me/541166637192" rel="noopener noreferrer" target="_blank">
                        <SiWhatsapp className="icon_footer" />
                    </a>
                </div>
                <small className="footer_small">MADE IN AUGUST-2022</small>
            </div>
        </div>
    )
}