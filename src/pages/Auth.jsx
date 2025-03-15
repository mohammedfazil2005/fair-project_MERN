import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import loginImage from  '../assets/login_image.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';


const Auth = ({fromRegisterPage}) => {
  return (
    <div style={{minHeight:'100px'}} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75 border shadow card rounded mt-5' >
        <Row >
          <Col>
          <img src={loginImage} className='img-fluid w-75' alt="" />
          </Col>
          <Col>
          <h1 style={{fontSize:'50px'}}> <i className='fa-brands fa-docker mt-3'></i>Project fair</h1>
          <h5>Sign {fromRegisterPage?"up":"in"} to your account?</h5>
          <Form>
            <>
            {fromRegisterPage&&(
              <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            )}
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
            </>
            <button className='mt-2 btn btn-primary'>{fromRegisterPage?"Register":"Login"}</button>
            <p className='mt-2'>New User? Please click to {fromRegisterPage?<Link to={'/login'}>Login</Link>:<Link to={'/register'}>Register</Link>}</p>
          </Form>
          </Col>
          
        </Row>
      </div>
    </div>
  )
}

export default Auth
