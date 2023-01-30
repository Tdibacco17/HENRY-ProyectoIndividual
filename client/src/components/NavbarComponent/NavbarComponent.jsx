import "../../styles/Navbar.css"
import { Link } from "react-router-dom";

import { UseWindowSize } from "../../hooks/UseWindowSize"
import { useParams } from 'react-router-dom';

export default function NavbarComponent({ children }) {

    const { width } = UseWindowSize()

    let { id } = useParams();

    return (
        <div className="container_all_navbar">
            <Link to="/home" className="navbar_left">
                <img className="imgLogoDog" src={require("../../img/dog.png").default} alt="icon_proyect" />
                <h2>HOME</h2>
            </Link>

            {
                width > 992 && <>{children} </>
            }
            {
                (width > 992 || id) && <div className="navbar_right">
                    <Link to="/dogs">
                        <h2>CREATE DOG</h2>
                    </Link>
                </div>
            }
        </div>
    )
}