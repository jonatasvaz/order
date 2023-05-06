import { Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import { Conteiner, Img } from "./homeStyled"
import wall from"../../img/wall.jpg"
import Footer from "../footer/Footer"

function Home() {


    return (
      <motion.div
      intial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth,transition:{duration:0.1}}}
      >
        <Conteiner>
        <Img src={wall}/>
      
        </Conteiner>
   
      </motion.div>
    )
  }
  
  export default Home