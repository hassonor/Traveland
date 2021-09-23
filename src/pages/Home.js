import Header from "../components/Header";
import {useState} from 'react';
import Model from "../components/Model";


const Home = () => {
    const [state] = useState({
        heading: ' X-Travel מטיילים ונהנים',
        paragraph: 'הצטרף אלינו היום! וגלה את המקומות והיעדים היפים בעולם!'
    })
    return (
        <>
        <Header heading={state.heading} paragraph={state.paragraph}>
            <button className="btn-default">בוא נתחיל</button>
        </Header>
            <Model/>
        </>
    )
}

export default Home;
