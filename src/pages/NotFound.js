import {Helmet} from "react-helmet-async";

const NotFound = () =>{
    return(
        <>
            <Helmet>
                <title>Error 404</title>
                <meta name="description" content="iTravel Not Found Page"/>
            </Helmet>

            <h1 style={{direction: 'ltr'}} >אופס, דף האינטרנט שביקשת לא נמצא</h1>

        </>
    )
}

export default NotFound;
