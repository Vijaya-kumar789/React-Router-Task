import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import Navbar from './navbar'
import All from "./All"
import Fsd from "./Fsd"
import CyberSecurity from "./Cyber Security"
import UIUX from "./Ui-Ux"
import DataScience from "./DataScience"
import Blockchain from "./Blockchain"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<All/>}></Route>
      <Route path="/Fsd" element={<Fsd/>}></Route>
      <Route path="/Blockchain" element={<Blockchain/>}></Route>
      <Route path="/CyberSecurity" element={<CyberSecurity/>}></Route>
      <Route path="/DataScience" element={<DataScience/>}></Route>
      <Route path="/Ui-Ux" element={<UIUX/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
