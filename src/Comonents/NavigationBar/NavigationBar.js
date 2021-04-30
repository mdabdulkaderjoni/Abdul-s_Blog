import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png';

import './NavigationBar.css'
const NavigationBar = () => {
    return (
      <div className='btm-margin'>
        
      <Navbar fixed="top" className="nav-style" variant="dark" expand="lg">
         <Container>
          <Link className="navbar-brand " to="/"> 
               <img src={logo} className="logo" alt=""/>
           </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="collapsed" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                 <Link className="nav-link nav-text" to="/home">
                     Home
                  </Link>
                  <Link className="nav-link nav-text" to="/javascript" s>
                     Javascript
                  </Link> 
                  <Link className="nav-link nav-text" to="/interviewjs" s>
                     InterviewJS
                  </Link> 
                  
                  <Link className="nav-link nav-text" to="/contact" >
                     Contact
                  </Link> 
                  {/* <button onClick={()=>setLoggedInUser({})}>Sign-Out</button> */}
                  {/* <Link to="/login">
                      {
                         loggedInUser.name?<Button variant="danger" onClick={()=>setLoggedInUser({})}>Sign-Out</Button>:<Button variant="success">Login</Button>
                      } 
                  </Link> */}
                  {/* <Link className="nav-link" to="/user" style={{color:'white'}}>
                     <h5>{loggedInUser.name}</h5>
                  </Link> */}
                  
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
     
       
     </div>
    );
};

export default NavigationBar;