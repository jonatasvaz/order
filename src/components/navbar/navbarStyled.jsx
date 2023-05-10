import styled from "styled-components"

export const Nav=styled.nav`
 width: 100%;
 height: 90px;
 background-color: #20201b;
display: flex;
justify-content: space-between;
  

ul{
    display: flex;

    @media (max-width: 407px) {
       
       
     margin-left: -40px;
     
      }

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
      @media (max-width: 407px) {
       
       
       font-size: 10px;
       
        }
       
      }   
      a:hover{
        color: gray;
       
      }
    }

  
}
  
`