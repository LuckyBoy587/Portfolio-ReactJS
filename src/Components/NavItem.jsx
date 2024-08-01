import PropTypes from "prop-types";

function NavItem(props) {
    return (
        <div className="nav-item">
            <a href={`#${props.name}`}>{props.name}</a>
        </div>
    );
}

export default NavItem

NavItem.propTypes = {
    name: PropTypes.string
}

NavItem.defaultProps = {
    name: "Not Found"
}