
import { motion } from "framer-motion"
import { Container,Img } from "./aboutStyled"
import aboutPhoto from "../../img/about.jpg"

function About() {


    return (
      <motion.div
      intial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth,transition:{duration:0.1}}}
      >
      <Container>
           <Img src={aboutPhoto}/>
      </Container>
      </motion.div>
    )
  }
  
  export default About