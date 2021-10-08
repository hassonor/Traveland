import {useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useHistory} from "react-router-dom";

const Header = ({heading, paragraph, children, image}) => {
    const [state] = useState({
        video: './assets/videos/video.mp4',
        poster: '/assets/images/screen.png',
        logo: '/assets/images/logo.png'
    })
    const {push} = useHistory()
    const goToHome = () =>{
        push('/');
    }
    return(
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <LazyLoadImage src={state.logo} alt="logoImage" onClick={goToHome}/>
                </div>
            </div>
            <div className="header__video">
                {image ? <img src={image} alt={image}/> : <video src={state.video} autoPlay loop muted poster={state.poster}/> }
            </div>
            <div className='header__contents'>
                <div className='container'>
                    <div className='header__contents__text'>
                        <div className='header__contents__text__child'>
                            <h1 className='header__contents__text__child__h1'>{heading}</h1>
                            <p className='header__contents__text__child__p'>{paragraph}</p>
                            <div className='header__contents__text__child__link'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

