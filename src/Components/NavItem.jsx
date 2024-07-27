import PropTypes from "prop-types";

function NavItem(props) {
    return (
        // <div style={{
        //     display: "inline-block",
        //     margin: "5px",
        //     padding: "5px",
        //     backgroundColor: ""
        // }}>
        //     <p style={{
        //         padding: "0",
        //         margin: "0"
        //     }}>{props.name}</p>
        // </div>

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