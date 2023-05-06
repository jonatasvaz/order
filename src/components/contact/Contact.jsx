
import { motion } from "framer-motion"
import { Container,Img,Form } from "./contactStyled"
import imgform from "../../img/form.jpg"


function Contact() {


    return (
      <motion.div
      intial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}
      >
      <Container>
           <Img src={imgform}/>
           <Form>
            <header>contact us</header>
            <div>
         
               <input placeholder="digite de nome" type="text"/>
            </div>
            <div>
         
               <input placeholder="digite de nome" type="email"/>
            </div>
            <div>
             
               <input placeholder="digite de nome" type="text"/>
            </div>
               <button>send mensage</button>
           </Form>
      </Container>  
     
      </motion.div>
    )
  }
  
  export default Contact