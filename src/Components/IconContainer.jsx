import Icon from "./Icon"
import "./IconContainer.css"

function IconContainer() {
    const hyperLinks = {
        "github": "https://github.com/LuckyBoy587",
        "linkedin": "https://www.linkedin.com/in/kowshik-baskaran-505247291/",
        "instagram": "https://www.instagram.com/luckyboy_587/"
    }

    return (
        <div className="icon-container">
            <Icon name={"github"} url={hyperLinks["github"]}/>
            <Icon name={"linkedin"} url={hyperLinks["linkedin"]}/>
            <Icon name={"instagram"} url={hyperLinks["instagram"]}/>
        </div>
    )
}

export default IconContainer