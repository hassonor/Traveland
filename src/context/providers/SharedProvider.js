import {useReducer} from "react";
import SharedContext from "../SharedContext";
import SharedReducer from "../reducer/SharedReducer";
import services from "../../data/services";

const SharedProvider = (props) => {
    const [sharedData, dispatch] = useReducer(SharedReducer, {
        serviceData: services
    },undefined);
    return(
        <SharedContext.Provider value={{ sharedData, dispatch }}>
            {props.children}
        </SharedContext.Provider>)
}

export default SharedProvider;
