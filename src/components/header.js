import React from "react"
import {Link} from 'gatsby'
const Header = () => {
  return(
    <div id='head-main'>
      
      <div className='head-logo'>
     <Link to='/'> <h1 id='logo-txt'>Shopify</h1></Link>
     <div className='search-bar'>
     <input type="text" placeholder="search"/>
           <button className="search-btn">&#128269;</button>
           </div>
     </div>

    <div id='head-lnk'>
      <Link to="/" className="lnk"><b>HOME</b></Link>
    <Link to ="/product" className="lnk"><b>Products</b></Link>
    <Link to="/contact" className="lnk"><b>Contact</b></Link>
    </div>
    </div>
  );
}
export default Header;
