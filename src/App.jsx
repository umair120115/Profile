import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import FirstPage from "./components/FirstPage";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { HashRouter } from "react-router-dom";
function App() {
  

  return (
    <HashRouter >
         <Routes>
                <Route path="/" element={<FirstPage/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/contact" element={<Contact/>}/>

         </Routes>
    
    
    </HashRouter>
  )
}

export default App
