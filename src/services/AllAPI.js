import commonAPI from "./commonAPI";

export const registerUser=async(data)=>{
    return await commonAPI('post','/register',data)
}

export const loginUser=async(data)=>{
    return await commonAPI('post','/login',data)
}

export const addProject=async(data,reqHeader)=>{
    return await commonAPI('post','/addproject',data,reqHeader)
}

export const getThreeProjects=async()=>{
    return await commonAPI('get','/homeprojects',"")
}

