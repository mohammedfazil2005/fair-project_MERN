import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import imageHeader from '../assets/imgHeader.webp'
import ProjectsCard from '../components/ProjectsCard'
import Card from 'react-bootstrap/Card';
import { getThreeProjects } from '../services/AllAPI';

const Home = () => {
  const [loggedIN,setLoggedIN]=useState(false)
  const [projectData,setProjectData]=useState([])
  const navigate=useNavigate()

 

  const onProjectClick=()=>{
    loggedIN?navigate('/projects'):alert("Please login to view projects!")
  }

  const getHomeProject=async()=>{
    try {
      let ApiResponce=await getThreeProjects()
      if(ApiResponce.status==200){
        setProjectData(ApiResponce.data)
      }else{
        console.log(ApiResponce.responce)
      }
    } catch (error) {
      alert(error)
    }
  }
  useEffect(()=>{
    getHomeProject()
  },[])

  console.log(projectData)
  


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedIN(true)
    }else{
      setLoggedIN(false)
    }
  })



  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
           <h1 style={{fontSize:'80px'}}> <i className='fa-brands fa-docker'></i>Project fair</h1>
           <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore repellat voluptate, quaerat, vero soluta eveniet, quos atque et est illum! Expedita obcaecati culpa deserunt ut necessitatibus, qui temporibus doloribus?</p>
            {loggedIN?<Link className='btn btn-warning' to={'/dashboard'}>Start to explore</Link>:<Link className='btn btn-danger' to={'/login'}>Login/Register</Link>}
          </div>
          <div className="col-lg-6">
            <img src={imageHeader} alt="imageThumbnail" className='img-fluid' />
          </div>
        </div>
      </div>
     
    </div>
    <div className="mt-5 text-center">
      <h1 className='mb-5'>Explore our projects</h1>
      <marquee>
        <div className="d-flex">
         {projectData?.map((a)=>(
           <div className="me-5">
           <ProjectsCard projects={a}/>
         </div>
         ))}
        </div>
      </marquee>
      <button className='btn btn-link mt-5 mb-4' onClick={onProjectClick}>Click here to view more projects!</button>
    </div>
    <div className='d-flex justify-content-center alIgn-items-center mt-5 flex-column text-center'>
      <h1>Our Testimonials</h1>
      <div className="d-flex justify-content-evenly align-items-center mt-3">
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'><img height={'60px'} width={'60px'} src='https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png' className='img-fluid rounded-circle'/> 
        <span>gopan SWAMI </span>
     </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          </div>
          </Card.Text>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa velit hic deleniti
        </Card.Text>
       
      </Card.Body>
    </Card>
    
      </div>
    </div>
    </>
  )
}

export default Home
