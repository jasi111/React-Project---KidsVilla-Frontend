import React, {useState,useContext} from 'react';//createContext SignUp
import {Switch,Route} from 'react-router-dom';
import Navbar from './Navbar';

import {InfoSection, Info} from './Info';
import SignUpWindow from './SignUpWindow';
import LoginWindow from './LoginWindow';
import Video from './Video';
import Testimony from './Testimony';
import Jumbotron from './Jumbotron';
import Footer from './footer';
import { AppContext } from '../App';





const Home= () => {

 
  const [state,setState] = useContext(AppContext);

  return (
    
    <div className="App">
     <Navbar></Navbar>
     
     <Video></Video>
    
     <InfoSection >
       <Info className="info"
       title= "Safe"
       caption="Playdate works great for coordinating childcare with 
       families you know and trust, ensuring safety for kids.">
       
       </Info>
      
       <Info  
       title = "Easy"
       caption="We help you find nearby parents, meet up for playdates, 
       and build life-changing local networks for sharing kids’ activities & childcare."/>
     
       <Info 
       title= "Create memories"
       caption="The first friendships and play dates will be charished for lifetime."/>
     
     </InfoSection>
     <Jumbotron img="images/green.jpg"/>

    <InfoSection className="testimonials" title="What people are saying...">
        <Testimony
          img="images/teacher-2.jpg"
          title="Jasmine" 
          caption="Kids Villa makes very easy to find parents of my kids age group and find play 
          dates for my kids to connect with friends and explore playing."/>
        <Testimony 
          img="images/teacher-4.jpg"
          title="Tina S."          
          caption="I recently settled in UAE, as my kids was new to this place ,they felt lonely.
					At that time I came to know about Kids Villa,this realy helped my kids to make new friends,
					explore, play together and much much more....."/>
        <Testimony
          img="images/teacher-1.jpg"
          title="Sarah W."
          caption="My son used to feel loney and bored inside house, Kids Villa helped me to
          make my son happy." />
      </InfoSection>
    <Footer/>
     {state.signUpForm && <SignUpWindow/>}
     {state.LoginForm && <LoginWindow/>}
     
 </div>
 
  );
}

export default Home;
