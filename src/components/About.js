import React,{ useState,useContext} from 'react';
import Navbar from './Navbar';
import MobNav from './mobnav';
import { AppContext } from '../App';
import SignUpWindow from './SignUpWindow';
import LoginWindow from './LoginWindow';
import Footer from './footer';

const About =()  => {

    const [state,setState] = useContext(AppContext);
    return(
       
         <div>
        <Navbar></Navbar>
    
        <img className="gif" src="images/groupkids.gif"/>  
            <div className="img" >                        
                <img className="gif2" src="images/groupkids.gif"/>  
               
            <h1 className="aboutcentre">What We Do</h1>
We believe thet no child should ever be bored. Playdate is a smart solution for the parents to 
find playdates for their kids and to meet up with other like minded parents. On Playdate, we show you other parents in your neighborhood with similar-aged children and create matches based on shared interests. You can chat, 
arrange meetups and share experiences based on meaningful topics.
Your child will make new friends...and you will too!.
        
{state.signUpForm && <SignUpWindow/>}
{state.LoginForm && <LoginWindow/>}
       </div>
       <Footer/>
        </div>  
       

    )
}


export default About;