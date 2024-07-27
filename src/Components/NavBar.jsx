import PropTypes from "prop-types";
import NavItem from "./NavItem";

function NavBar() {
    const items = ["Home", "About", "Skills", "Services"]
    const navItems = items.map(item => <NavItem key={item} name={item}/>)
    return (
        <header>
            <p>Kowshik</p>
            {navItems}
        </header>
    );
}

export default NavBar

NavBar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
}