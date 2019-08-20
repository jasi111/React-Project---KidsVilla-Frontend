import React, { useContext, useState } from 'react';
import { AppContext } from '../App'; 

const SignUpWindow = () => {
//initially values are undefined
    let name;
    let email;
    let password;
    let gender;

    const [localState, setLocalstate] = useState({
        successMessage: false,
        errorMEssage: false
    })

    const [state, setState] = useContext(AppContext);

    const registerUser = () => {

        let formData = {
            name: name.value,
            email: email.value,
            password: password.value,
            gender: gender.value
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
        setState({ signUpForm: false })
    }
    return(<div className="form">
        <div className="container">

            <label>Name</label>
            <input ref={comp=> name = comp} type="text" className="form-control"/>

            <label>Password</label>
            <input ref={comp=> password = comp} type="password" className="form-control" />

            <label>Email</label>
            <input ref={comp=> email = comp} type="text" className="form-control" />

            <label>Gender</label>
            <input ref={comp=> gender = comp} type="text" className="form-control" />
            
            <button onClick={registerUser} className="btn btn-primary">Register</button>
            <button onClick={closeSignUp} className="btn btn-danger">Cancel</button>

            {
                localState.successMessage && 
                <div className="alert alert-success">
                    Congratulation! You've been successfully signed up.
                </div>
            }
               { localState.errorMessage && 
                <div className="alert alert-danger">
                    Error
                </div>
            }
             
        </div>
    </div>)
}

export default SignUpWindow;