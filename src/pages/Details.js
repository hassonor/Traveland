import {useContext, useEffect} from "react";
import DestinationContext from "../context/DestinationContext";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {DETAILS} from "../context/types/DestinationTypes";
import Header from "../components/Header";
import DestinationInfo from "../components/DestinationInfo";

const Details = () => {
    const {destinationsData, dispatch} = useContext(DestinationContext);
    const {details} = destinationsData;
    const {id} = useParams();
    useEffect(()=>{
        dispatch({type: DETAILS, payload: id});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    return <>
        <Helmet>
            <title>{details.name}</title>
        </Helmet>
        <Header
            heading={details.name}
            image={details.bigImage}>
        </Header>
        <DestinationInfo details={details}/>
    </>
}

export default Details;
