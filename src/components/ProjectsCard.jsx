import React, { useState } from 'react'
import { Card } from 'react-bootstrap'  
import Modal from 'react-bootstrap/Modal';



const ProjectsCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





  return (
    <>
    <Card className='btn shadow' onClick={handleShow}>
        <Card.Img src='https://www.projectstoday.com/images/2024/ProjectInfoImg.webp' variant='top' height={'200px'}/>
        <Card.Body>
        <Card.Title>
            Project 1
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
                    <img src="https://www.projectstoday.com/images/2024/ProjectInfoImg.webp" className='img-fluid' alt="" />
                </div>
                <div className="col-lg-6">
                    <h3>Project Heading</h3>
                    <h6>Languages used : <span className='text-warning fw-bold'>Javascript,HtmL</span></h6>
                    <p style={{textAlign:'justify'}}> <span className='fw-bold'>Project overview</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam iure quasi at, saepe aliquid animi hic!  </p>
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
