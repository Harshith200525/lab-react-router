import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/about"
import Contact from "../pages/contact"

const Allroutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/about' element={<About />} />
  </Routes>
  )
}

export default Allroutes