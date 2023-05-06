import styled from "styled-components"

export const Nav=styled.nav`
 width: 100%;
 height: 90px;
 background-color: #20201b;
display: flex;
justify-content: space-between;
  

ul{
    display: flex;

    li{
      margin-right: 53px;
      line-height: 45px;
      list-style: none;
       
      @media (max-width: 768px) {
        margin-right: 13px;
       justify-content: center;
      }

      a{
       text-decoration: none;
       font-size: 20px;
       color: #fff;

       @media (max-width: 768px) {
    font-size: 13px;
       
      }
   font-size: 18px;
       
      }   
      a:hover{
        color: gray;
       
      }
    }

    @media (min-width: 768px) {
   
       
      }
}
  
`