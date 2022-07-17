import React from 'react'
import './Navbar.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const myNavbar = () => {
  return (
    // <nav className='app__navbar'>
    //     <div className='app__navbar-logo'>
    //         <img src = {logo} alt ="logo"></img>
    //     </div>
    //     <ul className='app__navbar-links'>
    //         {['home','about','projects','skills','contact'].map((item) => (
    //           <li className='app__flex p-text' key={`link-${item}`}>
    //             <div/>
    //             <a href={`#${item}`}>{item}</a>
    //           </li>
    //         ))}
    //     </ul>
    // </nav>
    <Navbar id="nav" className="sticky-top" bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand className="navbar__brand" href="#Home">HsunOuYang(Owen)</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link className="navbar__link__home" href="#Home">Home</Nav.Link>
            <Nav.Link className="navbar__link__about" href="#About">About</Nav.Link>
            <Nav.Link className="navbar__link__projects"href="#Projects">Projects</Nav.Link>
            <Nav.Link className="navbar__link__skills"href="#Skills">Skills</Nav.Link>
            <Nav.Link className="navbar__link__contact"href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default myNavbar