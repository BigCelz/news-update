import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const NavbarComponent = ({setCategory}) => {
  return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark" >
    <Container>
      <Navbar.Brand href='/'><span className='badge bg-light text-dark fs-4'>News World</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " className=' border-0 shadow-none' />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="me-auto">
          <Nav.Link  onClick={()=>setCategory("technology")}>Technology</Nav.Link>
          <Nav.Link  onClick={()=>setCategory("business")}>Business</Nav.Link>
          <Nav.Link  onClick={()=>setCategory("health")}>Health</Nav.Link>
          <Nav.Link  onClick={()=>setCategory("science")}>Science</Nav.Link>
          <Nav.Link  onClick={()=>setCategory("sports")}>Sports</Nav.Link>
          <Nav.Link onClick={()=>setCategory("entertainment")} >Entertainment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent
