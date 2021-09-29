import {NAV_TOGGLE} from "../types/NavTypes";

const NavReducer = (state, action) =>{
    if(action.type === NAV_TOGGLE){
        return !state;
    }
    else{
        return state;
    }

}

export default NavReducer;
