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

export const getAllProjects=async(reqHeader,searchkey)=>{
    return await commonAPI("get",`/getAllProducts?search=${searchkey}`,{},reqHeader)
}

export const getUserProjects=async(reqHeader)=>{
    return await commonAPI("get",'/getuserProjects',{},reqHeader)
}


export const updateProjects=async(id,reqbody,reqHeader)=>{
    return await commonAPI("put",`/project/${id}/update`,reqbody,reqHeader)
}

export const deleteProject=async(id,reqheader)=>{
    return await commonAPI('delete',`/project/${id}/delete`,{},reqheader)
}

export const updateUserProfile=async(reqbody,reqheader)=>{
    return await commonAPI('patch','/profileupdate',reqbody,reqheader)
}

export const getProfileDetails=async(reqheader)=>{
    return await commonAPI("get","/getuserdetails",{},reqheader)
}