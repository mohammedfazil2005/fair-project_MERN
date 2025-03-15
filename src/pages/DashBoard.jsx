import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import ViewProject from '../components/ViewProject'

const DashBoard = () => {
  return (
    <>
    <Header insideDashboard={true}/>
    <div style={{paddingTop:"30px"}} className='container-fluid'>
      <div className="d-flex justify-content-between">
        <h1>Welcome <span className='text-warining'>User</span></h1>
        <Profile/>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <ViewProject/>
        </div>
        <div className="col-lg-4">

        </div>
      </div>
    </div>
    </>
  )
}

export default DashBoard
