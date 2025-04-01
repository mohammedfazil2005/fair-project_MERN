import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import profile from '../assets/profileimg.png'

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="d-flex justify-content-between ">
      <h1 className='mt-2 text-warning'>Profile</h1>
      <button className='btn me-4' onClick={()=>setOpen(!open)}><i className='fa-solid fa-angle-down text-warning'></i></button>
    </div>
    <Collapse in={open}>
        <div id="example-collapse-text">
         <div className="d-flex flex-column align-items-center shadow p-2">
          <label >
            <input type="file" style={{display:'none'}} />
            <img src={profile} height={200} width={200} alt="" />
          </label>
          <input type="text" placeholder='User GITHUB Link' className='form-control mt-2' />
          <input type="text" placeholder='User LINKEDIN Link' className='form-control mt-2' />
          <button className='btn btn-warning mt-2 w-100'>Update</button>
         </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile
