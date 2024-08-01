import PropTypes from "prop-types";
import NavItem from "./NavItem";
import "./NavBar.css"

function NavBar() {
    return (
        <header>
            <p>Kowshik</p>
            <NavItem name={"Home"}/>
            <NavItem name={"About"}/>
            <NavItem name={"Skills"}/>
            <NavItem name={"Services"}/>
        </header>
    );
}

export default NavBar

NavBar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
}