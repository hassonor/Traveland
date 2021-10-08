import {Helmet} from "react-helmet-async";
import Header from "../components/Header";
import {useState} from "react";
import {Link} from 'react-router-dom'

const NotFound = () =>{
    const [state] = useState({
        heading: 'Page Not Found 404',
        paragraph: 'מצטערים, העמוד שחיפשת אינו קיים.',
        image: '/assets/images/404.jpg'
    })
    return(
        <>
            <Helmet>
                <title>Error 404</title>
                <meta name="description" content="iTravel Not Found Page"/>
            </Helmet>

            <Header heading={state.heading} paragraph={state.paragraph} image={state.image}>
            <Link to="/" class="btn-default">חזור לעמוד הבית</Link>
            </Header>

        </>
    )
}

export default NotFound;
