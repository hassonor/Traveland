import {useContext} from "react";
import ModelContext from "../context/ModelContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";

const Login = (props) =>{
    const {dispatch} = useContext(ModelContext);
    return (<form>
        <div className="model__heading">
            <h3>התחברות</h3>
        </div>

        <div className='group'>
            <input type="email" name="" className="group__control" placeholder="אימייל"/>
        </div>
        <div className='group'>
            <input type="password" name="" className="group__control" placeholder="סיסמא"/>
        </div>
        <div className='group flex space-between y-center'>
            <input type="submit" name="" className="btn-dark" value="התחבר"/>
            <span onClick={()=> dispatch({type: OPEN_MODEL, payload: props.currentModel})}> צור משתמש חדש</span>
        </div>
    </form>)
}

export default Login;
