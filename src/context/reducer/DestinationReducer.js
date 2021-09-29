import {DETAILS} from "../types/DestinationTypes";

const DestinationReducer = (state, action) =>{
    const {type, payload} = action;
    if(type === DETAILS){
        const destination = state.destinations.find((destination) => destination.id === parseInt(payload));
        return {
            ...state,
            details: destination,
        };
    }
    else {
        return state;
    }
}

export default DestinationReducer;
