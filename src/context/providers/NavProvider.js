import {useReducer} from "react";
import NavContext from "../NavContext";
import NavReducer from "../reducers/NavReducer";

const NavProvider = (props) => {
    const [state, dispatch] = useReducer(NavReducer, false, undefined);
    return(
        <NavContext.Provider value={{ state, dispatch }}>
        {props.children}
        </NavContext.Provider>)
}

export default NavProvider;
