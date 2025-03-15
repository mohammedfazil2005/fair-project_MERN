import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DashBoard from "./pages/DashBoard"
import Projects from "./pages/Projects"
import Auth from "./pages/Auth"
import Footer from "./components/Footer"



function App({fromRegisterPage}) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/register" element={<Auth fromRegisterPage={true} />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
