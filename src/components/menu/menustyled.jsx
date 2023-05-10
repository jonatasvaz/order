import styled from "styled-components"




export const Card=styled.div`
 
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap:50px;
margin-top: 50px;
   width: 100%;
  justify-self: center;

 @media (max-width: 379px){
   grid-template-columns: 1fr;
   margin-left: 80px;
 }

 @media (min-width: 380px) and (max-width: 499px){
    grid-template-columns: 1fr;
    margin-left:120px;
    gap: 20px;
 }

  @media (min-width: 500px) and (max-width: 550px){
   
   grid-template-columns: 1fr 1fr;
   gap: 20px;
   margin-left: 50px;
  }


 @media (min-width: 551px) and (max-width:580px){
  
  grid-template-columns: 1fr 1fr;
  gap: 30px;
 margin-left: 70px;
 

 }

 @media (min-width: 581px) and (max-width:679px){
  
  grid-template-columns: 1fr 1fr;
  gap: 30px;
 margin-left: 100px;
 }

  @media (min-width: 680px) and (max-width:760px){
  
   grid-template-columns: 1fr 1fr;
   gap: 30px;
  margin-left: 150px;
  }

  @media (min-width: 761px) and (max-width:860px){
  
  grid-template-columns: 1fr 1fr;
  gap: 50px;
 margin-left: 190px;
 }

 @media (min-width: 861px) and (max-width:900px){
  
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
 margin-left: 80px;
 }
 @media (min-width: 901px) and (max-width:980px){
  
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
 margin-left: 120px;
 }
 @media (min-width: 981px) and (max-width:1070px){
  
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
 margin-left: 190px;
 }
 @media (min-width:1071px){
   margin-left: 300px;
 }

   div{
     width: 200px;
     height: 230px;
     background-color: #eeecec;
   text-align: center;

   border-bottom-left-radius:8px;
   border-bottom-right-radius:8px;
   
    justify-content:center;
  
  
    img{
        width: 100%;
        height: 150px;
     }
     p{
        text-align: center;
        font-weight: 600;
     }
     label{
        font-weight: 600;
        }
    }
    div:hover{
        background-color: #d9d9d9;
    }

`