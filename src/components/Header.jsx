import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = ({insideDashboard}) => {
  return (
    <Navbar className="border shadow" sticky='top'>
    <Container>
      <Link to={"/"} style={{textDecoration:'none'}}>
      <Navbar.Brand  className='text-light fw-bolder'>
      <i className="fa-brands fa-docker"></i> Project fair
      </Navbar.Brand>
      </Link>
      {insideDashboard&&<button className='btn' style={{textDecoration:'underline',fontWeight:'bold'}}>Logout<i class="fa-solid fa-right-from-bracket ms-2"></i></button>}
    </Container>
  </Navbar>
  )
}

export default Header
