import {useState} from "react";

const ContactForm = () =>{
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const submitContact = (e) =>{
        e.preventDefault();
    }
    return (
        <form onSubmit={submitContact} >
            <div className="group">
                <h3 className="page__contact__heading">טופס ליצירת קשר</h3>
            </div>
            <div className="group">
                <input
                    type='text'
                    name=''
                    className='group__control'
                    placeholder='שם מלא'
                    value={state.name}
                    onChange={(e)=> setState({...state, name: e.target.value})}
                />
            </div>
            <div className="group">
                <input
                    type='email'
                    name=''
                    className='group__control'
                    placeholder='אימייל'
                    value={state.email}
                    onChange={(e)=> setState({...state, email: e.target.value})}
                />
            </div>
            <div className="group">
                <textarea cols="12" rows="8" className="group__textarea" placeholder="רשום כאן את ההודעה שלך"
                          defaultValue={state.message}
                          onChange={(e)=> setState({...state, message: e.target.value})}/>
            </div>
            <div className="group">
                <input type="submit" value="שלח הודעה &larr;" className="btn-dark"/>
            </div>
        </form>
    )
}


export default ContactForm;
