import {useReducer} from "react";
import NavContext from "../NavContext";
import NavReducer from "../reducer/NavReducer";

const NavProvider = (props) => {
    const [state, dispatch] = useReducer(NavReducer, false);
    return(
        <NavContext.Provider value={{ state, dispatch }}>
    {props.children}
        </NavContext.Provider>)
}

export default NavProvider;
