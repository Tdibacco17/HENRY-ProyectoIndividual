import React from "react";
import "../../styles/Footer.css";
import { SiGmail, SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

import { UseWindowSize } from "../../hooks/UseWindowSize"

export default function FooterComponent() {
    const { width } = UseWindowSize()

    return (
        <div className="contenedorFooter">
            {width > 625 && <img className="imgHenry" src={require("../../img/logoHenry.png").default} alt="logo_henry" />}
            <div>
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
            </div>
            {width > 625 && <img className="imgLogoDog" src={require("../../img/dog.png").default} alt="icon_proyect" />}
            {
                width < 625 && <div className="container_img">
                    <img className="imgLogoDog" src={require("../../img/dog.png").default} alt="icon_proyect" />
                    <img className="imgHenry" src={require("../../img/logoHenry.png").default} alt="logo_henry" />
                </div>
            }
        </div>
    )
}