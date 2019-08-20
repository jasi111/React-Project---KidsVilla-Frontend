import React, { useContext, useState } from 'react';
import { AppContext } from '../App'; 

const LoginWindow = () => {

    let email;
    let password;

    const [localState, setLocalstate] = useState({
        successMessage: false,
        errorMEssage: false
    })

    const [state, setState] = useContext(AppContext);

    const registerUser = () => {

        let formData = {
            
            email: email.value,
            password: password.value,
            
        }
        fetch(
            //first argument - address
            // URL
            'http://localhost:5000/auth/register', 
            // Data
            //second argument - data
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        )
    
    .then(res => { 
            if(res.status =="400"){
                //handle error
                setLocalstate({...localState,successMessage:false, errorMessage: true})
            }else{
                //parse json data
                res.json()
                setLocalstate({...localState, successMessage:true, errorMessage:false})
            }
          })
         .catch(err => {
         console.log('err', err)
     })
    }

    const closeSignUp = () => {
        setState({ LoginForm: false })
    }

    return(<div className="form">
    <div className="container">

        <label>Email</label>
        <input ref={comp=> email = comp} type="text" className="form-control" />

        <label>Password</label>
        <input ref={comp=> password = comp} type="password" className="form-control" />

        <button onClick={registerUser} className="btn btn-primary">Register</button>
        <button onClick={closeSignUp} className="btn btn-danger">Cancel</button>

        {
                localState.successMessage && 
                <div className="alert alert-success">
                    You are signed in
                </div>
            }
               { localState.errorMessage && 
                <div className="alert alert-danger">
                    Sorry! No user with email or password exists.
                </div>
            }
    </div>
</div>)
}

export default LoginWindow;