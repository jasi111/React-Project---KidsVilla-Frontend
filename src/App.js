import React , {useState,createContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Home from './components/home';
//import About from './components/About';
import './App.css';
import Loadable from 'react-loadable';




const Home = Loadable({
    loader: () =>
     import(/*webpackChunkName: "Home"*/"./components/home"),
    loading:() => Home,
});

const About = Loadable({
    loader: () => import(/*webpackChunkName: "About"*/"./components/About"),
    loading:() => About,
});

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