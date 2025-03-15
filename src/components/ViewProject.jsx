import React from 'react'
import AddProjects from '../components/AddProjects'
import EditProjects from './EditProjects'

const ViewProject = () => {
  return (
    <>
    <div className="d-flex justify-content-between">
      <h1 className='text-warning'>All Projects</h1>
      <AddProjects/>  
    </div>
    <div className="mt-2">
      <div className="border rounded d-flex justify-content-between p-2 align-items-center">
        <h2>Title</h2>
        <div className='d-flex'>
          <div >
            <EditProjects/>
            </div>
            <div className='btn'>
            <a target='_blank' href=""><i className="fa-brands fa-github"></i></a>
           
            </div>

            <button className='btn'> <i className="fa-solid fa-trash text-danger"></i></button>

        </div>
      </div>
    </div>
    </>
  )
}

export default ViewProject
