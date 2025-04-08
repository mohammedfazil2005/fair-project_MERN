import React, { useEffect, useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import profile from '../assets/profileimg.png'
import { getProfileDetails, updateUserProfile } from '../services/AllAPI';

const Profile = () => {
  const [open, setOpen] = useState(false);

  const [userData,setUserData]=useState({})

  const [data,setData]=useState({
    gitlink:userData.gitlink,
    linkedinlink:userData.linkedinlink,
    profileimage:userData.profileimage
  })
 



  

  const [editresponce,setEditresponce]=useState("")

  const updateProfile=async()=>{
    const token=sessionStorage.getItem("token")

    if(token){
    
      if(data.gitlink&&data.linkedinlink&&data.profileimage){
        let requestHeader={
          "Authorization": `Bearer ${token}`,
         "Content-Type": "multipart/form-data"
      }

      let payload=new FormData()

      payload.append("gitlink",data.gitlink)
      payload.append("linkedinlink",data.linkedinlink)
      payload.append("profileimage",data.profileimage)
  
      const apiResponce=await updateUserProfile(payload,requestHeader)

      if(apiResponce.status==200){
        alert("Succesfully updated")
        setEditresponce(apiResponce.data)
      }else{
        alert("Error")
      }
      }else{
        alert("Please fill the form")
      }
      
    
  }else{
    alert("Please login")
  }

}

   const getUserProfileDetails=async()=>{
    if(sessionStorage.getItem("token")){
      let requestHeader={
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
    }

    try {
      const apiResponce=await getProfileDetails(requestHeader)
      setUserData(apiResponce.data)
    } catch (error) {
      console.log(error)
    }


    }else{
      alert("Please login")
    }
   }


  //  console.log(userData.gitlink)
   

 

   useEffect(()=>{
    getUserProfileDetails()
   },[editresponce])
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
            <input type="file" style={{display:'none'}} onChange={(e)=>setData({...data,profileimage:e.target.files[0]})}/>
            <img src={profile} height={200} width={200} alt="" />
          </label>
          <input value={data?.gitlink} type="text" placeholder='User GITHUB Link' onChange={(e)=>setData({...data,linkedinlink:e.target.value})}  className='form-control mt-2' />
          <input value={data?.linkedinlink} type="text" placeholder='User LINKEDIN Link' className='form-control mt-2' onChange={(e)=>setData({...data,gitlink:e.target.value})}   />
          <button onClick={updateProfile} className='btn btn-warning mt-2 w-100'>Update</button>
         </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile
