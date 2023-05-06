import { Link } from "react-router-dom"
import pizza from"../../img/pizza.jpg"
import {Nav} from "./navbarStyled"
 
function Navbar(){
    return(
     
           <Nav>
              <ul>
                <li>
                    <img src={pizza} style={{width:'100px'}}/>
                </li>
              </ul>
              <ul>
                  <li>  <Link to='/'>Home</Link> </li>
                  <li>  <Link to='/menu'>Menu</Link> </li>
                  <li>  <Link to='/about'>About us</Link> </li>
                  <li>  <Link to='/contact'>contact</Link> </li>
                </ul>
           </Nav>
       
    )
}


export default Navbar