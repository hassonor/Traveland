import Header from "../components/Header";
import {useState, useContext, useEffect} from 'react';
import {Helmet} from "react-helmet-async";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Destinations from "../components/Destinations";
import Services from "../components/services/Services";
// import Reviews from "../components/reviews/Reviews";
import GalleryComponent from "../components/gallery/GalleryComponent";
import Footer from "../components/footer/Footer";

const Home = () => {
    const {dispatch} = useContext(ModelContext);

    const [state] = useState({
        heading: 'iTravel מטיילים ונהנים',
        paragraph: 'הצטרף אלינו היום! וגלה את המקומות והיעדים היפים בעולם!'
    })
    const [registerModel] = useState('registerModel');
    const [loginModel] = useState('loginModel');
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <title>iTravel</title>
                <meta name="description" content="מטיילים מסביב לעולם עם iTravel"/>
                <meta name='keywords' content='travel,travel tours, places,airline'/>
            </Helmet>
        <Header heading={state.heading} paragraph={state.paragraph}>
            <button className="btn-default"  onClick={()=> dispatch({type: OPEN_MODEL, payload: registerModel})}>התחברות</button>
        </Header>
            <Model current={registerModel}><Register currentModel={loginModel}/> </Model>
            <Model current={loginModel}><Login currentModel={registerModel} /> </Model>
            <Destinations/>
            <Services/>
            <GalleryComponent/>
            {/*<Reviews/>*/}
            <Footer/>
        </>
    )
}

export default Home;
