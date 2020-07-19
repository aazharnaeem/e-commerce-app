import React from "react"
import {Link} from 'gatsby'
//import wolfLogo from '../images/wolfLogo.png';
const Header = () => {
  return(
    <div id='head-main'>
      
  {/*   <img src={wolfLogo} width={40} style={{borderRadius:50}}></img> */}
    <span id='head-btn'>
    <Link to="/"><button>Home</button></Link>
    <Link to ="/product"><button>Products</button></Link>
    <Link to="/contact"><button>Contact</button></Link>
    </span>
    </div>
  );
}
export default Header;
