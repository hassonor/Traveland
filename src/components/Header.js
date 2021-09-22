import {useState} from "react";

const Header = () => {
    const [state] = useState({
        video: './assets/videos/header.mp4'
    })
    return(
        <div className="header">
            <div className="header__video">
            <video src={state.video} autoPlay loop muted></video>
            </div>
        </div>
    )
}

export default Header;

