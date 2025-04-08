import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthenticationContext';


const Header = ({insideDashboard}) => {
      const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
  
  const onLogoutclick=()=>{
    sessionStorage.removeItem("token")
    setIsLoggedIn(false)

  }
  return (
    <Navbar className="border shadow" sticky='top'>
    <Container>
      <Link to={"/"} style={{textDecoration:'none'}}>
      <Navbar.Brand  className='text-light fw-bolder'>
      <i className="fa-brands fa-docker"></i> Project fair
      </Navbar.Brand>
      </Link>
      {insideDashboard&&<button className='btn' style={{textDecoration:'underline',fontWeight:'bold'}} onClick={onLogoutclick}>Logout<i class="fa-solid fa-right-from-bracket ms-2"></i></button>}
    </Container>
  </Navbar>
  )
}

export default Header
