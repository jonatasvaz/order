import { motion } from "framer-motion"


function Menu() {


    return (
      <motion.div
      intial={{width:0}}
      animate={{width:"10%"}}
      exit={{x:window.innerWidth,transition:{duration:0.1}}}
      >
     <h1>menu</h1>
      </motion.div>
    )
  }
  
  export default Menu