import {useReducer} from "react";
import DestinationContext from "../DestinationContext";
import DestinationReducer from "../reducer/DestinationReducer";
import {destinations} from "../../data/destinations";

const DestinationProvider = (props) =>{
    const [destinationsData, dispatch] = useReducer(DestinationReducer, {
        destinations
    },undefined);
    return (
        <DestinationContext.Provider value={{destinationsData, dispatch }}>
            {props.children}
        </DestinationContext.Provider>
    )
}

export default DestinationProvider;
