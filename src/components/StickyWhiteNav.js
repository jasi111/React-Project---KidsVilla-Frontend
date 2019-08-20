import React from 'react';
import SignUpButton from './SignUpButton';
import {Navbar, Container} from 'react-bootstrap';
import LoginButton from './LoginButton';

import { Link } from 'react-router-dom';

const StickyWhiteNav = () => {
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

  export default StickyWhiteNav;
