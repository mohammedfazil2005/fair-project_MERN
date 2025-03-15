import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddProjects = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
   <button className='btn btn-primary' onClick={handleShow}> + Add to projects</button>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-lg-4">
            <label>
              <input type="file" style={{display:"none"}} />
              <img className='w-50' src="https://images.vexels.com/media/users/3/130153/isolated/preview/93a30c258ebb3defaeabbe2568d9425b-dslr-camera-icon.png?w=360g"  alt="" />
            </label>
            <p>Uplad only the following file types (jpeg,jpg,png) </p>
          </div>
          <div className="col-lg-8">
            <input type="text" placeholder='Project Title' className='form-control mt-2'/>
            <input type="text" placeholder='Project Language' className='form-control mt-2'/>
            <input type="text" placeholder='Project Overview' className='form-control mt-2'/>
            <input type="text" placeholder='Project Github Link' className='form-control mt-2'/>
            <input type="text" placeholder='Project Project website Link' className='form-control mt-2'/>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default AddProjects
