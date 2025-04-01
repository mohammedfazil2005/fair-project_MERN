import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import loginImage from  '../assets/login_image.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/AllAPI';


const Auth = ({fromRegisterPage}) => {

  const navigate=useNavigate()

  const [data,setData]=useState({
    username:"",
    email:"",
    password:""
  })

  const onBtnClick=async(e)=>{
    e.preventDefault()
    if(fromRegisterPage){
      try {
        if(data.username&&data.email&&data.password){
          const severResponce=await registerUser(data)
          if(severResponce.status>=200&&severResponce.status<=300){
            alert("User added succesfully")
          }else{
          if(severResponce.status==409){
            alert("User already exists")
            navigate('/login')
          }
          }
        }else{
          alert('Please fill all fields')
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      try {
        if(data.email&&data.password){
          let payload={
            email:data.email,
            password:data.password
          }
          let serverResponce=await loginUser(payload)
          if(serverResponce?.status==200){
           
            sessionStorage.setItem("user",serverResponce?.data?.user.username)
            sessionStorage.setItem("token",serverResponce?.data?.token)
            navigate('/dashboard')
          }else if(serverResponce?.status==401){
            alert(serverResponce?.response.data.message)
          }else{
            alert("Internal server error,please contact admin!")
          }
        }else{
          alert("Please enter email and password")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }


  
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
              <Form.Control type="text" onChange={(e)=>setData({...data,username:e.target.value})} placeholder="name@example.com" />
            </FloatingLabel>
            )}
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" onChange={(e)=>setData({...data,email:e.target.value})} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" onChange={(e)=>setData({...data,password:e.target.value})} placeholder="Password" />
      </FloatingLabel>
            </>
            <button className='mt-2 btn btn-primary' onClick={onBtnClick}>{fromRegisterPage?"Register":"Login"}</button>
            <p className='mt-2'>New User? Please click to {fromRegisterPage?<Link to={'/login'}>Login</Link>:<Link to={'/register'}>Register</Link>}</p>
          </Form>
          </Col>
          
        </Row>
      </div>
    </div>
  )
}

export default Auth
