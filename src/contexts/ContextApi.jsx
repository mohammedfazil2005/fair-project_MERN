import React, { createContext, useState } from 'react'

export const addProjectContext=createContext()  //to store apiresponce
export const editProjectContext=createContext()


const ContextProject = ({children}) => {
    
    const [addProjectResponce,setAddProjectResponce]=useState([])
    const [editProjectResponce,setEditProjectResponce]=useState([])

  return (
   < addProjectContext.Provider value={{addProjectResponce,setAddProjectResponce}}>
    <editProjectContext.Provider value={{editProjectResponce,setEditProjectResponce}}>
    {children}
    </editProjectContext.Provider>
   </addProjectContext.Provider>
  )
}

export default ContextProject;
