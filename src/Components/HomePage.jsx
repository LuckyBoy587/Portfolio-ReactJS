import Icon from "./Icon";

const HomePage = () => {
    const text = "Contact Me"
    const hyperLinks = {
        "github": "https://github.com/LuckyBoy587",
        "linkedin": "https://www.linkedin.com/in/kowshik-baskaran-505247291/",
        "instagram": "https://www.instagram.com/luckyboy_587/"
    }
    const mailURL = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjsFmjBLpHmvdWJGmGvdBXhrgMPmHsfzBjnwzWBgQBGspsMcZLZMxMbHPvsxwJcjfWXV"
    return (
        <div className="info-container" id="Home">
            <div className="icon-container">
                {Object.keys(hyperLinks).map(name => <Icon name={name} url={hyperLinks[name]}/>)}
            </div>
            <div className="personal-info-box">
                <p className="hi-text">Hi, I'm Kowshik</p>
                <p className="profession-text">Software Engineer</p>
                <p className="description-text">Passionate React.js developer crafting dynamic, high-performance web
                    applications.</p>
                <button className="contact-button">
                    <a href={mailURL} target={"_blank"} rel="noreferrer">
                        {text}
                        <i className="fa-solid fa-paper-plane"></i>
                    </a>
                </button>
            </div>
            <div className="empty"></div>
            <div className="profile-pic-box">
                <img src={"/Assets/profile.jpg"} alt={"Profile"}/>
            </div>
        </div>
    )
}

export default HomePage