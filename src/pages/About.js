import {Helmet} from "react-helmet-async";

const About = () =>{
    return(
        <>
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="iTravel about page"/>
            </Helmet>

            <h1 style={{direction: 'ltr'}} >About Page</h1>

        </>
            )
}

export default About;
