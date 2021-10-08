import {useContext, useState} from "react";
import ModelContext from "../context/ModelContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";

const Register = (props) => {
    const {dispatch} = useContext(ModelContext);
    const [state, setState] = useState({
        name: '',
        email: '',
        password:''
    });
    const registerForm = (e) =>{
        e.preventDefault();
        // Todo
    }
    return (<form onSubmit={registerForm}>
            <div className="model__heading">
                <h3>צור חשבון חדש</h3>
            </div>
        <div  className='group'>
            <input
                type="text"
                name=""
                className="group__control"
                placeholder="שם"
                value={state.name}
                onChange={(e)=> setState({...state, name: e.target.value})}
            />
        </div>
        <div className='group'>
            <input
                type="email"
                name=""
                className="group__control"
                placeholder="אימייל"
                value={state.email}
                onChange={(e)=> setState({...state, email: e.target.value})}
            />
        </div>
        <div className='group'>
            <input
                type="password"
                name=""
                className="group__control"
                placeholder="סיסמא"
                value={state.password}
                onChange={(e)=> setState({...state, password: e.target.value})}
            />
        </div>
        <div className='group model__row'>
            <input type="submit" name="" className="btn-dark" value="הירשם"/>
            <span onClick={()=> dispatch({type: OPEN_MODEL, payload: props.currentModel})}> משתמש קיים? התחבר</span>
        </div>
        </form>)
}

export default Register;
