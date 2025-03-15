import React from 'react'
import { Link } from 'react-router-dom'
import imageHeader from '../assets/imgHeader.webp'
import ProjectsCard from '../components/ProjectsCard'
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
           <h1 style={{fontSize:'80px'}}> <i className='fa-brands fa-docker'></i>Project fair</h1>
           <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore repellat voluptate, quaerat, vero soluta eveniet, quos atque et est illum! Expedita obcaecati culpa deserunt ut necessitatibus, qui temporibus doloribus?</p>
            <Link className='btn btn-warning' to={'/dashboard'}>Start to explore</Link>
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
          <div className="me-5">
            <ProjectsCard/>
          </div>
        </div>
      </marquee>
      <button className='btn btn-link mt-5 mb-4'>Click here to view more projects!</button>
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
