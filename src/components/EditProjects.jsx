import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BaseURL from '../services/baseURL';
import { updateProjects } from '../services/AllAPI';
import { editProjectContext } from '../contexts/ContextApi';

const EditProjects = ({project}) => {
    const [show, setShow] = useState(false);

    const {editProjectResponce,setEditProjectResponce}=useContext(editProjectContext)
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

      const [previewImage, setPreviewImage] = useState("")
      const [imageTypeStatus, setImageTypeStatus] = useState(false)
      console.log(project)


    const [projectDetails,setProjectDetails]=useState({
      projectID:project._id,
      projectImg:"",
      projectTitle: project.projectTitle,
      projectLanguage: project.projectLanguage,
      projectOverview: project.projectOverview,
      projectGitLink: project.projectGitLink,
      projectWebsiteLink: project.projectWebsiteLink
    })


    const onEditButtonClick=async()=>{
      if(projectDetails.projectTitle&&projectDetails.projectLanguage&&projectDetails.projectOverview&&projectDetails.projectWebsiteLink&&projectDetails.projectGitLink){
        const paylod = new FormData()

        
        paylod.append("projectTitle", projectDetails.projectTitle)
        paylod.append("projectLanguage", projectDetails.projectLanguage)
        paylod.append("projectOverview", projectDetails.projectOverview)
        paylod.append("projectGitLink", projectDetails.projectGitLink)
        paylod.append("projectWebsiteLink", projectDetails.projectWebsiteLink)
        previewImage?paylod.append("projectImg",projectDetails.projectImg):paylod.append("projectImg",project.projectImg)

        const token=sessionStorage.getItem("token")

        if(token){
          let requestHeader={
           "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
          }
          let apiResponce=await updateProjects(projectDetails.projectID,paylod,requestHeader)
          if(apiResponce.status==200){
            setEditProjectResponce(apiResponce.data)
            alert("Successfully updated")
            handleClose()
          }else{
            alert("Error while updating")
          }
        }else{
          alert("Please login")
        }
        
      }else{
        alert("All fields are required!")
      }

    }




     useEffect(() => {
        if (projectDetails.projectImg) {
          if (projectDetails.projectImg.type == "image/jpeg" || projectDetails.projectImg.type == "image/jpg" || projectDetails.projectImg.type == "image/png") {
            setPreviewImage(URL.createObjectURL(projectDetails.projectImg))
            setImageTypeStatus(true)
          } else {
            alert("Upload only specified type!")
            setImageTypeStatus(false)
          }
    
        }
    
      }, [projectDetails.projectImg])
    



  return (
    <>
    <button className='btn' onClick={handleShow}><i className='fa-solid fa-edit'></i></button>
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
                <input type="file" style={{ display: "none" }} onChange={(e) => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} />
                <img className='w-50' src={previewImage ? previewImage : `${BaseURL}/uploads/${project.projectImg}`} alt="" />
              </label>
              {!imageTypeStatus ? <p>Uplad only the following file types (jpeg,jpg,png) </p> : ""}
            </div>
            <div className="col-lg-8">
              <input type="text" placeholder='Project Title' onChange={(e) => setProjectDetails({ ...projectDetails, projectTitle: e.target.value })}  value={projectDetails.projectTitle}  className='form-control mt-2' />
              <input type="text" placeholder='Project Language' onChange={(e) => setProjectDetails({ ...projectDetails, projectLanguage: e.target.value })} value={projectDetails.projectLanguage}  className='form-control mt-2' />
              <input type="text" placeholder='Project Overview' onChange={(e) => setProjectDetails({ ...projectDetails, projectOverview: e.target.value })} value={projectDetails.projectOverview}  className='form-control mt-2' />
              <input type="text" placeholder='Project Github Link' onChange={(e) => setProjectDetails({ ...projectDetails, projectGitLink: e.target.value })} value={projectDetails.projectGitLink}  className='form-control mt-2' />
              <input type="text" placeholder='Project website Link' onChange={(e) => setProjectDetails({ ...projectDetails, projectWebsiteLink: e.target.value })}  value={projectDetails.projectWebsiteLink} className='form-control mt-2' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onEditButtonClick}>Edit changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProjects
