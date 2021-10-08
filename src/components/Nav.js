import {Link} from 'react-router-dom';
import NavContext from "../context/NavContext";
import {useContext} from "react";
import {NAV_TOGGLE} from "../context/types/NavTypes";

const Nav = () => {
    const {state,dispatch} = useContext(NavContext);

    return (
        <>
            {state ? <div className="navClass" onClick={()=> dispatch({type: NAV_TOGGLE })}></div>: ''}
            <div className={state ? 'nav nav--open' : 'nav nav--close'}>
                <div className="nav__content">
                    <li>
                        <Link onClick={()=> dispatch({type: NAV_TOGGLE })} to="/">דף הבית</Link>
                    </li>
                    <li>
                        <Link onClick={()=> dispatch({type: NAV_TOGGLE })} to="/about">עלינו</Link>
                    </li>
                    <li>
                        <Link onClick={()=> dispatch({type: NAV_TOGGLE })} to="/contact">יצירת קשר</Link>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Nav;
