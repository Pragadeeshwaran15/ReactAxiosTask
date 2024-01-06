import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function TopBar() {
    let navigate=useNavigate()
  return  <Navbar expand="lg" className="bg">
  <Container>
    <h2>Person Info</h2>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link onClick={()=>navigate("/create")} style={{borderRadius:"30px"}}>Add info</Nav.Link> */}
        <button onClick={()=>navigate("/create")} className='but'>Create</button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default TopBar
