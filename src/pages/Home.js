import Header from "../components/Header";
import {useState, useContext} from 'react';
import {Helmet} from "react-helmet-async";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";
import Register from "../auth/Register";
import Login from "../auth/Login";

const Home = () => {
    const {dispatch} = useContext(ModelContext);

    const [state] = useState({
        heading: 'iTravel מטיילים ונהנים',
        paragraph: 'הצטרף אלינו היום! וגלה את המקומות והיעדים היפים בעולם!'
    })
    const [registerModel] = useState('registerModel');
    const [loginModel] = useState('loginModel');
    return (
        <>
            <Helmet>
                <title>iTravel</title>
                <meta name="description" content="מטיילים מסביב לעולם עם iTravel"/>
                <meta name='keywords' content='travel,travel tours, places,airline'/>
            </Helmet>
        <Header heading={state.heading} paragraph={state.paragraph}>
            <button className="btn-default"  onClick={()=> dispatch({type: OPEN_MODEL, payload: registerModel})}>בואו נתחיל</button>
        </Header>
            <Model current={registerModel}><Register currentModel={loginModel}/> </Model>
            <Model current={loginModel}><Login currentModel={registerModel} /> </Model>
        </>
    )
}

export default Home;
