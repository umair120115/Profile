import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import FirstPage from "./components/firstPage";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
function App() {
  

  return (
    <BrowserRouter >
         <Routes>
                <Route path="/" element={<FirstPage/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/contact" element={<Contact/>}/>

         </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
