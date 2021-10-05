import {useReducer} from "react";
import DestinationContext from "../DestinationContext";
import DestinationReducer from "../reducers/DestinationReducer";
import {destinations} from "../../data/destinations";
import Cities from "../../data/cities";

const DestinationProvider = (props) =>{
    const [destinationsData, dispatch] = useReducer(DestinationReducer, {
        destinations,
        details: {},
        cities: Cities,
        filteredCities: [],
    },undefined);
    return (
        <DestinationContext.Provider value={{destinationsData, dispatch }}>
            {props.children}
        </DestinationContext.Provider>
    )
}

export default DestinationProvider;
