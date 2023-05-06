import{AiFillGithub} from "react-icons/ai"
import{AiFillLinkedin} from "react-icons/ai"
import {FooterStyled}  from "./footerStyled"

function Footer(){
    return(
       <FooterStyled>
          <ul>
            <li><AiFillGithub/></li>
            <li><AiFillLinkedin/></li>
          </ul>
          <ul>
             <li>&copy; 2023 jonatasVaz</li>
          </ul>
       </FooterStyled>
    )
}

export default Footer