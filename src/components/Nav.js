import {Link} from 'react-router-dom';
import NavContext from "../context/NavContext";
import {useContext} from "react";

const Nav = () => {
    const {state, dispatch} = useContext(NavContext);

    return (
        <>
            {state ? <div className="navClass"></div>: ''}
            <div className={state ? 'nav nav--open' : 'nav nav--close'}>
                <div className="nav__content">
                    <li>
                        <Link to="/">דף הבית</Link>
                    </li>
                    <li>
                        <Link to="/about">עלינו</Link>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Nav;
