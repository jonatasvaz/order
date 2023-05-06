import{Route,Routes,useLocation}from "react-router-dom"

import Menu from "../components/menu/Menu"
import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Home from "../components/home/Home"

 import{AnimatePresence} from "framer-motion"

function AnimatedRoutes(){
   const location =useLocation()


    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
             <Route  exact path="/" element={<Home/>}/>
             <Route path="/menu" element={<Menu/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
         </Routes>
        </AnimatePresence>
    )

}

export default AnimatedRoutes