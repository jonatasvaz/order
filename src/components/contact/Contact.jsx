
import { motion } from "framer-motion"
import { Container,Img,Form } from "./contactStyled"
import imgform from "../../img/form.jpg"
import { useState } from "react"
import userApi from "../../features/slice"


function Contact() {
   const [name,setName]=useState('')
   const[email,setEmail]=useState('')
   const[description,setDescription]=useState('')
   
   const[addUser,{data,error}]= userApi.useAddUserMutation()
   console.log(data)

   function handleSubmit(e){
      e.preventDefault()
         
      addUser({
        name,
        email,
        description
       }) 
    
       setName('')
       setEmail('')
       setDescription('')
    }


    return (
      <motion.div
      intial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}
      >
      <Container>
           <Img src={imgform}/>
           <Form onSubmit={handleSubmit}>
            <header>contact us</header>
            <div>
         
               <input placeholder="Type your name" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div>
         
               <input placeholder="Type your e-mail" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div>
             
               <input placeholder="type your description" type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </div>
            {error ? <button type="submit" 
            style={{backgroundColor:"red",
            border:" 2px solid #fff;"
            
         }}>send mensage</button> :
              <button type="submit" >send mensage</button>
            }
              </Form>
           
      </Container>  
     
      </motion.div>
    )
  }
  
  export default Contact