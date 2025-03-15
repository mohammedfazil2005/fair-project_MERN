import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectsCard from '../components/ProjectsCard'

const Projects = () => {
  return (
    <div>
     <Header/>
     <div className='container-fluid' style={{paddingTop:'70px'}}>
     <div className='d-flex justify-content-between'>
      <h1>All Projects</h1>
      <input type="text" placeholder='Search Projects by there language' className='form-control w-25' />
     </div>
     <div>
     <Row>
      <Col sm={12} md={3} lg={4}>
      <ProjectsCard/>
      </Col>
     </Row>
     </div>
     </div>
    
    </div>
  )
}

export default Projects
