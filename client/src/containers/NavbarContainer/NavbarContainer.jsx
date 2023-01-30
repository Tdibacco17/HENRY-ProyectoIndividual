import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

export default function NavbarContainer({ children, isShowHamburger, setIsShowHamburger }) {

    return <NavbarComponent isShowHamburger={isShowHamburger} setIsShowHamburger={setIsShowHamburger}>{children}</NavbarComponent>
}