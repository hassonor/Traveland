import {LazyLoadImage} from "react-lazy-load-image-component";
import {useState} from "react";

const AboutImage =  () =>{
    const [image] = useState('/assets/about/about.jpg');
    return(
        <div  className="page__image">
            <LazyLoadImage src={image} alt="about image"/>
        </div>
    )
}

export default AboutImage;
