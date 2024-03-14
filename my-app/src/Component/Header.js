import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          {/* <Nav.Link href="#link">About</Nav.Link> */}
          <Link className='nav-link' to="/"> Home </Link>
           <Link className='nav-link' to="/todo"> Todo </Link>
           <Link className='nav-link' to="/category"> Category </Link>
          <Link className='nav-link' to="/calc">Calc </Link>
          <Link className='nav-link' to="/tictac">TicTac </Link>
          <Link  className='nav-link' to="about"> About </Link>
         
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            
            <Link  className='nav-link' to="reduxcounter"> redux counter </Link>
             <Link  className='nav-link' to="smartphones"> API smartphones </Link>
             
          </NavDropdown>

          <NavDropdown title="Formik" id="basic-nav-dropdown">
            
             <Link  className='nav-link' to="fyup"> Yup </Link>
            <Link  className='nav-link' to="fhook"> F Hoook </Link>
            <Link  className='nav-link' to="fbasic"> F Baciscc </Link>
            <Link  className='nav-link' to="formik"> F formik </Link>
              
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header