import { motion } from "framer-motion"

import italian from "../../img/italian.jpg"
import margarita from"../../img/margarita.jpg"
import peperone from"../../img/peperone.jpg"
import spinafre from "../../img/spinafre.jpg"
import chese from "../../img/chese.jpg"
import chicken from"../../img/chicken.jpg"
import { Card } from "./menustyled"
  

function Menu() {


    return (
      <motion.div
      intial={{width:0}}
      animate={{width:"10%"}}
      exit={{x:window.innerWidth,transition:{duration:0.1}}}
      >

  

        <Card>
        
        <div>
              <img src={spinafre}/>
              <p>spinafre pizza</p>
              <label>15.99</label>
        </div>  
       <div>
             <img src={margarita}/>
             <p>margarita pizza</p>
              <label>15.99</label>  
       </div>  
       <div>
             <img src={peperone}/> 
             <p>peperone pizza</p>
              <label>16.99</label>
       </div>  
        <div>
             <img src={italian}/>
             <p>italian pizza</p>
              <label>13.99</label>
         </div> 

         <div>
             <img src={chese}/>
             <p>cheese pizza</p>
              <label>19.99</label>
         </div> 
         <div>
             <img src={chicken}/>
             <p>chicken pizza</p>
              <label>23.99</label>
         </div> 

          </Card>
      </motion.div>
    )
  }
  
  export default Menu