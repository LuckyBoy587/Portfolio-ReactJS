import {useState} from "react";

function ContactButton() {
    const text = "Contact Me"
    const githubURL = "https://github.com/LuckyBoy587"
    let clicked = false
    const mouseReleaseStyle = {
        marginTop: "30px",
        width: "fit-content",
        padding: "3% 5%",
        backgroundColor: "rgb(108, 89, 210)",
        fontSize: "80%",
        color: "white",
        borderRadius: "4px",
    }

    const mouseClickStyle = {
        marginTop: "30px",
        width: "fit-content",
        padding: "3% 5%",
        backgroundColor: "white",
        fontSize: "80%",
        color: "rgb(108, 89, 210)",
        borderRadius: "4px",
    }

    const [currStyle, setCurrentStyle] = useState(mouseReleaseStyle)

    const handleClick = function (event) {
        if (!clicked && event.type === "click") {
            clicked = true
            setCurrentStyle(mouseClickStyle)
            setTimeout(() => {
                setCurrentStyle(mouseReleaseStyle)
                clicked = false
            }, 150)
        }
    }

    return (
        <a style={{textDecoration: "none", width: "max-content"}} href={githubURL} target="_blank" rel="noreferrer">
            <div className="contact-button" onClick={handleClick} style={currStyle}>
                {text}
                <i className="fa-solid fa-paper-plane"></i>
            </div>
        </a>
    )
}

export default ContactButton