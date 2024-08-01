import IconContainer from "./IconContainer";

function HomePage() {
    const text = "Contact Me"
    const mailURL = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjsFmjBLpHmvdWJGmGvdBXhrgMPmHsfzBjnwzWBgQBGspsMcZLZMxMbHPvsxwJcjfWXV"
    return (
        <div className="info-container" id="Home">
            <IconContainer />
            <div className="personal-info-box">
                <p className="hi-text text">Hi, I'm Kowshik</p>
                <p className="profession-text text">Software Engineer</p>
                <p className="description-text text">Passionate React.js developer crafting dynamic, high-performance web
                    applications.</p>
                <button className="contact-button">
                    <a href={mailURL} target={"_blank"} rel="noreferrer">
                        {text}
                        <i className="fa-solid fa-paper-plane"></i>
                    </a>
                </button>
            </div>
            <div className="profile-pic-box">
                <img src={"/Assets/image.png"} alt={"Profile"}/>
            </div>
        </div>
    )
}

export default HomePage