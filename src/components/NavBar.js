import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg='danger' data-bs-theme="dark"  fixed='top'>
          <Container>
            <Navbar.Brand as={Link} to={"/"}>Car Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/cartable"}  >Car Table</Nav.Link>
                <Nav.Link as={Link} to={"/carshow"}>Car Show</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar