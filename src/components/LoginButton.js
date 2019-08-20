import React, { useContext } from 'react';
import Button from './Button';
import { AppContext } from '../App';

/**
 * use 'AppContext.Consumer' if inside JSX
 * Use 'useContext if outside JSX 
 */

 //use context will give the values from context
const LoginButton = (prop) => {

    const [login, setLogin] = useContext(AppContext);
    const openWindow = () => {
        setLogin({ LoginForm: true });
    }

    // AppContext.Consumer will give you value from context in JSX
    return (
      <AppContext.Consumer>
        {
            (value)=><Button clickFunction={openWindow} className="link">Login</Button>
        }
      </AppContext.Consumer>
    )
}

export default LoginButton;