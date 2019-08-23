import React from 'react';
import SignUpButton from './SignUpButton';
import {Navbar, Container, Nav} from 'react-bootstrap';
import LoginButton from './LoginButton';

import { Link } from 'react-router-dom'; 

const NavBar = () => {

   return(
    
    <nav className=" navbar sticky-top">
      <div className="navigation topnav " id="Nav-responsive">
           <Link to="/"><img className="logo" src="images/logo.png"/></Link>
           <div className="navbar-right">
           <Link  to="/about"><h2>What We Do</h2></Link>
        
        <SignUpButton>Sign Up</SignUpButton>
        <LoginButton>Login</LoginButton>
       </div>                  
        </div>

        <div className="mobileview">
        <div className ="nav sticky-top">
        <Navbar className ="nav sticky-top mobnav"  expand="lg" variant="light" bg="light">
      <Container className="mobContainer">
        <Navbar.Brand><Link className="logo" to="/"><img src="images/logo.png"/></Link></Navbar.Brand>
        
        <Link  to="/about"><h2 className="aboutus">What We Do</h2></Link>
        
      </Container>
    </Navbar>

    <Navbar className ="nav sticky-top"  expand="lg" variant="light" bg="light">
      <Container >
        <div className="mobnav2">
       
        <SignUpButton>Sign Up</SignUpButton>
        <LoginButton>Login</LoginButton>
        </div>
      </Container>
    </Navbar>
    
    </div>

    </div>


    </nav>




)}

 export default NavBar;

