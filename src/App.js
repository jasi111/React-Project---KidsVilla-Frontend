import React , {useState,createContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/About';
import './App.css';
export const AppContext = createContext();//Signup



const App =() => {

    const [state, setState] = useState({signUpForm:false, label:'What Ever'})

    return (
        <AppContext.Provider value={[state, setState]} >   
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        
        
        </Switch>
        </BrowserRouter>
        </AppContext.Provider>
        
    )
}

export default App;