import { BrowserRouter,Routes,Route}from"react-router-dom"

import Navbar from "./components/navbar/Navbar"
  import AnimatedRoutes from "./routes/AnimatedRoutes" 
import Footer from "./components/footer/Footer"



function App() {


  return (
    <>
     <BrowserRouter>
     
        <Navbar/>
       <AnimatedRoutes/> 
     
     </BrowserRouter>
    </>
  )  
}

export default App
