import React from "react"
import {Link} from 'gatsby'
const Header = () => {
  return(
    <div id='head-main'>
      <div className="head-logo">
        <Link to="/"><h3>Shopify</h3> </Link>
      </div>
      <div className="head-lnk">
      <Link to="/" className="lnk"><b>Home</b></Link>
      <Link to="/aboutus" className="lnk"><b>About</b></Link>
      <Link to="/contact" className="lnk"><b>Contact</b></Link>
      <Link to ="/product" className="lnk"><b>Shop</b></Link>
  
      <span className="cart-head">
       <strong style={{color: "#efefef"}}>  &#128722;CART[<output>0</output>]</strong>
      </span>


      </div>
    </div>
  );
}
export default Header;

