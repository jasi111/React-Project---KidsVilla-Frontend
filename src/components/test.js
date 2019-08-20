import React, {useState} from 'react';
import Button from './Button';

import jumbotron from 'react-bootstrap';

//Responsive Navbar

const NavBar =()=>({
  render: function() {
    return (
      <div>
        <div className="topnav" id="myTopnav">
          <a href="#home" className="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="javascript:void(0);" className="icon" onclick="myFunction()">
            <i className="fa fa-bars" />
          </a>
        </div>
        <div style={{paddingLeft: '16px'}}>
          <h2>Responsive Topnav Example</h2>
          <p>Resize the browser window to see how it works.</p>
        </div>
      </div>
    );
  }
});    

//CSS

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}
//#########################################################################################


//Transparent on vide Navbar
const NavBar = () => {
  return(
    <nav class="navigation sticky-top">
           <Link className="navbar-logo" to="/"><img src="images/logo.png"/></Link>

           <div className="navbar-right">
           <Link  to="/about"><h2>What We Do</h2></Link>
        
        <SignUpButton>Sign Up</SignUpButton>
        <LoginButton>Login</LoginButton>
        </div>
</nav>
    

###############################################################################
const Jumbotron = () => {

      return (

        <div className="jumbotron" id="video-container">
        <video id="main-video" loop="true" autoplay="true" muted="true"
        preload="true">
            <source src="videos/kidsvilla.mp4" type="video/mp4"/>
            </video>
    </div>
    )
  }

################################################################################

//Navbar sticky white background
  const NavBar = () => {
    return(
        <Navbar className ="nav sticky-top" expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand><Link className="logo" to="/"><img src="images/logo.png"/></Link></Navbar.Brand>
          
          <Navbar.Brand ><Link className="logo" to="/about"><h2>What We Do</h2></Link></Navbar.Brand>
          
          <SignUpButton>Sign Up</SignUpButton>
          <LoginButton>Login</LoginButton>

        </Container>
      </Navbar>
    )
  }

  ############################################################

  //Transparent on video navbar

  const NavBar = () => {
    return(
      <nav class="navigation sticky-top">
             <Link className="navbar-logo" to="/"><img src="images/logo.png"/></Link>

             <div className="navbar-right">
             <Link  to="/about"><h2>What We Do</h2></Link>
          
          <SignUpButton>Sign Up</SignUpButton>
          <LoginButton>Login</LoginButton>
          </div>
</nav>     
    
    )
  }
###################################################################################
//video jumbotron
<div className="Jumbotron" >
        
 <video className="main-video" loop="true" autoplay="true" muted="true"
        preload="true">
              
            <source src="videos/kidsvilla.mp4" type="video/mp4"/>
           
            </video>
           
    </div>

#####################################################################################3
//Navbar

<Navbar className ="nav sticky-top bg-transparent container-fluid"  variant="light" >
        <Container> 
          <Navbar.Brand><Link className="logo" to="/"><img src="images/logo.png"/></Link></Navbar.Brand>
          
          <div className="link-align">
          <Navbar.Brand ><Link className="logo" to="/about"><h2>What We Do</h2></Link></Navbar.Brand>
          
          <Navbar.Brand ><SignUpButton>Sign Up</SignUpButton></Navbar.Brand>
          <Navbar.Brand ><LoginButton>Login</LoginButton></Navbar.Brand>
          </div>

        </Container>
      </Navbar>
    )
  }

  .link-align{
 
    margin-right: 0;
   
  }
  
  .link-align :Link{
   
    text-decoration:none;    
   
  }













//Navbar


  import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return(
        <Navbar className ="nav" expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand><Link className="logo" to="/"><img src="images/logo.png"/></Link></Navbar.Brand>
          
          <Navbar.Brand ><Link className="logo" to="/about"><h2>What We Do</h2></Link></Navbar.Brand>
          
          <SignUpButton>Sign Up</SignUpButton>
          <LoginButton>Login</LoginButton>

        </Container>
      </Navbar>
    )
  }


export default Jumbotron;