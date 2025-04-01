import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { addProject } from '../services/AllAPI';

const AddProjects = () => {
  const [show, setShow] = useState(false);
  const [previewImage, setPreviewImage] = useState("")
  const [imageTypeStatus, setImageTypeStatus] = useState(false)
  const [projectData, setProjectData] = useState({
    projectImg: "",
    projectTitle: "",
    projectLanguage: "",
    projectOverview: "",
    projectGitLink: "",
    projectWebsiteLink: ""
  })

  const handleClose = () => {
    clearContent()
    setShow(false)
  };
  const handleShow = () => setShow(true);


  const onBtnClick = async () => {
    if (projectData.projectImg && projectData.projectGitLink && projectData.projectLanguage && projectData.projectOverview && projectData.projectTitle && projectData.projectWebsiteLink) {
      const paylod = new FormData()

      paylod.append("projectImg", projectData.projectImg)
      paylod.append("projectTitle", projectData.projectTitle)
      paylod.append("projectLanguage", projectData.projectLanguage)
      paylod.append("projectOverview", projectData.projectOverview)
      paylod.append("projectGitLink", projectData.projectGitLink)
      paylod.append("projectWebsiteLink", projectData.projectWebsiteLink)

      if (sessionStorage.getItem("token")) {
        let requestHeader = {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data"
        }

        const serverResponce = await addProject(paylod, requestHeader)
        console.log(serverResponce)

        if (serverResponce.status == 201) {
          alert("Successfully created")
          handleClose()
        } else {
          console.log(serverResponce)
        }


      } else {
        alert("Token missing")
      }


    } else {
      alert("All fields are required")
    }
  }


  const clearContent = () => {
    setProjectData({ projectTitle: "", projectImg: "", projectWebsiteLink: "", projectOverview: "", projectLanguage: "", projectGitLink: "" })
    setPreviewImage('')
    setImageTypeStatus(false)
  }





  useEffect(() => {
    if (projectData.projectImg) {
      if (projectData.projectImg.type == "image/jpeg" || projectData.projectImg.type == "image/jpg" || projectData.projectImg.type == "image/png") {
        setPreviewImage(URL.createObjectURL(projectData.projectImg))
        setImageTypeStatus(true)
      } else {
        alert("Upload only specified type!")
        setImageTypeStatus(false)
      }

    }

  }, [projectData.projectImg])



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
                <input type="file" style={{ display: "none" }} onChange={(e) => setProjectData({ ...projectData, projectImg: e.target.files[0] })} />
                <img className='w-50' src={previewImage ? previewImage : "https://images.vexels.com/media/users/3/130153/isolated/preview/93a30c258ebb3defaeabbe2568d9425b-dslr-camera-icon.png?w=360g"} alt="" />
              </label>
              {!imageTypeStatus ? <p>Uplad only the following file types (jpeg,jpg,png) </p> : ""}
            </div>
            <div className="col-lg-8">
              <input type="text" placeholder='Project Title' onChange={(e) => setProjectData({ ...projectData, projectTitle: e.target.value })} className='form-control mt-2' />
              <input type="text" placeholder='Project Language' onChange={(e) => setProjectData({ ...projectData, projectLanguage: e.target.value })} className='form-control mt-2' />
              <input type="text" placeholder='Project Overview' onChange={(e) => setProjectData({ ...projectData, projectOverview: e.target.value })} className='form-control mt-2' />
              <input type="text" placeholder='Project Github Link' onChange={(e) => setProjectData({ ...projectData, projectGitLink: e.target.value })} className='form-control mt-2' />
              <input type="text" placeholder='Project website Link' onChange={(e) => setProjectData({ ...projectData, projectWebsiteLink: e.target.value })} className='form-control mt-2' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onBtnClick}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProjects
