import PropTypes from "prop-types";

function Icon(props) {
    // return (
    //     <a style={{
    //         textDecoration: "none",
    //         display: "inline-block",
    //         width: "fit-content",
    //         height: "fit-content"
    //     }} href={props.url} target={"_blank"} rel="noreferrer"><i className={`fa-brands fa-${props.name}`}></i></a>
    // )

    return (
        <i onClick={() => window.open(props.url, "_blank")} className={`fa-brands fa-${props.name}`}></i>
    )
}

Icon.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
}

export default Icon