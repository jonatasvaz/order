import styled from "styled-components";

export const Container =styled.div`
   display: flex;
   width: 100%;

   @media (max-width:750px ){
       display: inline-block;
      }
`
export const Img=styled.img`
   width: 50%;

   @media (max-width:750px ){
       width: 100%;
      }
`
export const Form=styled.form`
 width: 50%;
 height: 100%;
background-color: #e7e5e5;
padding-bottom: 105px;

@media (max-width:750px ){
       width: 100%;
       padding-top: 30px;
      }

header{
   text-align: center;
   font-size: 40px;
   color: #252525;
   margin: 40px auto;

   @media (max-width:750px ){
       margin: 0px auto 40px auto;
      }
}


 div input{
   width: 70%;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid rgb(170, 168, 168);
    outline: 0;
    font-size: 16px;
    color: rgb(26, 24, 24);
    transition: 0.5s ease-in-out;
    margin-left: 80px;
    margin-bottom: 25px;
    border-radius: 6px;

    @media (max-width:750px ){
      margin-left: 70px;
   }
 }

 button{
   font-size: 22px;
   margin-left: 37%;
   margin-top: 30px;
   padding: 8px;
   border-radius: 5px;
  background-color: #252525;
  color: #e7e5e5;
  border: none;
   @media (max-width:1000px ){
      margin-left: 32%;
   }
 }
 button:hover{
   background-color: #e7e5e5;
   color: #252525;
   border: 2px solid #252525;
   padding: 6px;
 }
/*/ input:valid{
    border-bottom: 2px solid cornflowerblue;
}/*/
`