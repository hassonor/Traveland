import {useContext} from "react";
import ModelContext from "../context/ModelContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";

const Register = (props) => {
    const {dispatch} = useContext(ModelContext);
    return (<form>
            <div className="model__heading">
                <h3>צור חשבון חדש</h3>
            </div>
        <div  className='group'>
            <input type="text" name="" className="group__control" placeholder="שם"/>
        </div>
        <div className='group'>
            <input type="email" name="" className="group__control" placeholder="אימייל"/>
        </div>
        <div className='group'>
            <input type="password" name="" className="group__control" placeholder="סיסמא"/>
        </div>
        <div className='group flex space-between y-center'>
            <input type="submit" name="" className="btn-dark" value="הירשם"/>
            <span onClick={()=> dispatch({type: OPEN_MODEL, payload: props.currentModel})}> משתמש קיים? התחבר</span>
        </div>
        </form>)
}

export default Register;
