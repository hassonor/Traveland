import Header from "../components/Header";
import {useState} from 'react';


const Home = () => {
    const [state] = useState({
        heading: 'Travel for your Soul.',
        paragraph: 'Join us Today! Travel the most beautiful places in the world!'
    })
    return (
        <>
        <Header heading={state.heading} paragraph={state.paragraph}>
            <button className="btn-default">Press Here</button>
        </Header>
        </>
    )
}

export default Home;
