import React, { useContext } from 'react';
import Button from './Button';
import { AppContext } from '../App';

/**
 * use 'AppContext.Consumer' if inside JSX
 * Use 'useContext if outside JSX 
 */

 //use context will give the values from context
const SignUpButton = (prop) => {

    const [state, setState] = useContext(AppContext);
    const openWindow = () => {
        setState({ signUpForm: true });
    }

    // AppContext.Consumer will give you value from context in JSX
    return (
      <AppContext.Consumer>
        
        {
            (value)=><Button clickFunction={openWindow} className="link">Sign Up</Button>
        }
        
      </AppContext.Consumer>
      
    )
}

export default SignUpButton;