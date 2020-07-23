import React from "react"
import {Link} from 'gatsby'
import wolflogo from '../images/wolflogo.jpg';
const Header = () => {
  return(
    <div id='head-main'>
      
     <img src={wolflogo} width={40} style={{borderRadius:50}}></img>
    <span id='head-lnk'>
    <Link to="/" className="lnk"><b>Home</b></Link>
    <Link to ="/product" className="lnk"><b>Products</b></Link>
    <Link to="/contact" className="lnk"><b>Contact</b></Link>
    <Link to="/signup" className="lnk"><b>Signup</b></Link>
    
    </span>
    </div>
  );
}
export default Header;
