import Header from "../components/Header";
import {useState, useContext} from 'react';
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";
import Register from "../auth/Register";

const Home = () => {
    const {dispatch} = useContext(ModelContext);

    const [state] = useState({
        heading: 'iTravel מטיילים ונהנים',
        paragraph: 'הצטרף אלינו היום! וגלה את המקומות והיעדים היפים בעולם!'
    })
    return (
        <>
        <Header heading={state.heading} paragraph={state.paragraph}>
            <button className="btn-default"  onClick={()=> dispatch({type: OPEN_MODEL})}>בוא נתחיל</button>
        </Header>
            <Model><Register/> </Model>
        </>
    )
}

export default Home;
