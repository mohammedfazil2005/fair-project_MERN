import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectsCard from '../components/ProjectsCard'
import { getAllProjects } from '../services/AllAPI'

const Projects = () => {

  const [projectData,setProjectData]=useState([])

  const [searchkey,setSearchKey]=useState("")

  const getProjects=async()=>{
    if(sessionStorage.getItem("token")){
      try {
        let requestHeader={
          "Authorization":`Bearer ${sessionStorage.getItem("token")}`
        }
        let ApiResponce=await getAllProjects(requestHeader,searchkey)
        if(ApiResponce.status==200){
          setProjectData(ApiResponce.data)
        }else{
          console.log(ApiResponce)
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      alert("Please login!")
    }
  }

  useEffect(()=>{
    getProjects()
  },[searchkey])


  return (
    <div>
     <Header/>
     <div className='container-fluid' style={{paddingTop:'70px'}}>
     <div className='d-flex justify-content-between'>
      <h1>All Projects</h1>
      <input type="text" placeholder='Search Projects by there language' className='form-control w-25' onChange={(e)=>setSearchKey(e.target.value)} />
     </div>
     <div className='mt-4'>
     <Row>
      { projectData?.length>0?
      
      projectData?.map((a,index)=>(
         <Col sm={12} md={3} lg={4}>
         <ProjectsCard projects={a}/>
         </Col>
      )):<div>
        <h1 className='text-center'>Error</h1>
        </div>}
     </Row>
     </div>
     </div>
    
    </div>
  )
}

export default Projects
