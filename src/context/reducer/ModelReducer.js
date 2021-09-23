import {CLOSE_MODEL, OPEN_MODEL} from "../types/ModelTypes";

const ModelReducer = (state,action) =>{
    if(action.type === OPEN_MODEL){
        return {
            modelStatus: true,
            current: action.payload
        };
    }
    else if(action.type === CLOSE_MODEL){
        return {
            modelStatus: false,
            current: ''
        }
    }
    else {
        return state;
    }
}

export default ModelReducer;
