import React, { useState } from 'react'
import { Card } from 'react-bootstrap'  
import Modal from 'react-bootstrap/Modal';
import BaseURL from '../services/baseURL';



const ProjectsCard = ({projects}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





  return (
    <>
    <Card className='btn shadow' onClick={handleShow}>
        <Card.Img src={`${BaseURL}/uploads/${projects.projectImg}`} variant='top' height={'200px'}/>
        <Card.Body>
        <Card.Title>
            {projects.projectTitle}
        </Card.Title>
        </Card.Body>
    </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                    <img src={`${BaseURL}/uploads/${projects.projectImg}`}  className='img-fluid' alt="" />
                </div>
                <div className="col-lg-6">
                    <h3>{projects.projectTitle}</h3>
                    <h6>Languages used : <span className='text-warning fw-bold'>{projects.projectLanguage}</span></h6>
                    <p style={{textAlign:'justify'}}> <span className='fw-bold'>Project overview</span>{projects.projectOverview} </p>
                </div>
            </div>
            <div className='float-start mt-3'>
                <a className='btn btn-secondary' href="https://github.com/mohammedfazil2005/job_portal.git"><i className='fa-brands fa-github'></i></a>
                <a  className='btn btn-secondary ms-2' href="https://github.com/mohammedfazil2005/job_portal.git"><i className='fa-solid fa-link'></i></a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectsCard
