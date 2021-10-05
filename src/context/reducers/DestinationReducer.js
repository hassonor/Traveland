import {DETAILS, CITES} from "../types/DestinationTypes";

const DestinationReducer = (state, action) =>{
    const {type, payload} = action;
    if(type === DETAILS){
        const destination = state.destinations.find((destination) => destination.id === parseInt(payload));
        return {
            ...state,
            details: destination,
        };
    }
    else if(type === CITES){
       const filtered =  state.cities.filter((city)=> parseInt(city.destinationId) === parseInt(payload));
       return{
           ...state,
           filteredCities: filtered,
       }
    }
    else {
        return state;
    }
}

export default DestinationReducer;
