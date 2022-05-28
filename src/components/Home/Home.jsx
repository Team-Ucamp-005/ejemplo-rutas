import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';


const Home = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Studio Ghibli :)</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/movies">
                Peliculas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Home</h1>
      <Outlet></Outlet>
    </>
  )
}

export default Home