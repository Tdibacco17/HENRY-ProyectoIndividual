import "../../styles/Navbar.css"
import { Link } from "react-router-dom";

export default function NavbarComponent({ children }) {

    return (
        <div className="container_all_navbar">
            <Link to="/home" className="navbar_left">
                <img className="imgLogoDog" src={require("../../img/dog.png").default} alt="icon_proyect" />
                <h2>HOME</h2>
            </Link>
            {children}
            <div className="navbar_right">
                <Link to="/dogs">
                    <h2>CREATE DOG</h2>
                </Link>
            </div>
        </div>
    )
}