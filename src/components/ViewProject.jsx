import React, { useContext, useEffect, useState } from 'react'
import AddProjects from '../components/AddProjects'
import EditProjects from './EditProjects'
import { deleteProject, getUserProjects } from '../services/AllAPI'
import { addProjectContext, editProjectContext } from '../contexts/ContextApi'


const ViewProject = () => {

  const [projectsData,setProjectData]=useState([])

  const {addProjectResponce,setAddProjectResponce}=useContext(addProjectContext)
  const {editProjectResponce,setEditProjectResponce}=useContext(editProjectContext)

  const [deleteProjects,setDeleteProjects]=useState("")


  const getUserSpecifiedProject=async()=>{
    try {
      if(sessionStorage.getItem('token')){
        let requestHeader={
          "Authorization":`Bearer ${sessionStorage.getItem("token")}`
        }
        let ApiResponce=await getUserProjects(requestHeader)
        if(ApiResponce.status==200){
          setProjectData(ApiResponce.data)
        }else{
          console.log(ApiResponce)
        }
      }else{
        alert("Please login")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onDeleteClick=async(id)=>{
    if(sessionStorage.getItem("token")){
      try {
        const requestHeader={
          "Authorization":`Bearer ${sessionStorage.getItem("token")}`,
        }
        let apiResponce=await deleteProject(id,requestHeader)
        if(apiResponce.status==200){
          setDeleteProjects(apiResponce.data)
          alert("Delete success")
        }else{
          alert("Error")
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      alert("Please Login")
    }
   
  }



  useEffect(()=>{
    getUserSpecifiedProject()
  },[addProjectResponce,editProjectResponce,deleteProjects])


  return (
    <>
    <div className="d-flex justify-content-between">
      <h1 className='text-warning'>All Projects</h1>
      <AddProjects/>  
    </div>
    {
      projectsData?.length>0?projectsData?.map((a,index)=>(
        <div key={index} className="mt-2">
      <div className="border rounded d-flex justify-content-between p-2 align-items-center">
        <h2>{a.projectTitle}</h2>
        <div className='d-flex'>
          <div >
            <EditProjects project={a}/>
            </div>
            <div className='btn'>
            <a target='blank' href=""><i className="fa-brands fa-github"></i></a>
           
            </div>

            <button className='btn' onClick={()=>onDeleteClick(a._id)}> <i className="fa-solid fa-trash text-danger"></i></button>

        </div>
      </div>
    </div>
      )):""
    }
    
    </>
  )
}

export default ViewProject
