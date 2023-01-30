import "../../styles/Navbar.css"
import { Link } from "react-router-dom";

import { UseWindowSize } from "../../hooks/UseWindowSize"
import { IoMenuSharp } from "react-icons/io5"

export default function NavbarComponent({ children, setIsShowHamburger, isShowHamburger }) {

    const { width } = UseWindowSize()

    return (
        <div className="container_all_navbar">
            <Link to="/home" className="navbar_left">
                <img className="imgLogoDog" src={require("../../img/dog.png").default} alt="icon_proyect" />
                <h2>HOME</h2>
            </Link>
            {
                width <= 992 && <button onClick={() => setIsShowHamburger(!isShowHamburger)} className="hamburger"><IoMenuSharp /></button>
            }
            {
                width > 992 && <>{children} </>
            }
            {
                width > 992
                && <div className="navbar_right">
                    <Link to="/dogs">
                        <h2>CREATE DOG</h2>
                    </Link>
                </div>
            }

        </div>
    )
}