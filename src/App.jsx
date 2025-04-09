import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DashBoard from "./pages/DashBoard"
import Projects from "./pages/Projects"
import Auth from "./pages/Auth"
import Footer from "./components/Footer"
import { useContext, useEffect } from "react"
import { AuthContext } from "./contexts/AuthenticationContext"




function App() {
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }
  },[isLoggedIn])


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={isLoggedIn?<DashBoard/>:<Navigate to={'/login'}/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/register" element={<Auth fromRegisterPage={true} />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
