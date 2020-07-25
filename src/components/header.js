import React from "react"
import {Link} from 'gatsby'
import wolflogo from '../images/wolflogo.jpg';
const Header = () => {
  return(
    <div id='head-main'>
      
      <div className='head-logo'>
     <Link to='/'><img src={wolflogo} alt='logo' width={50} style={{borderRadius:5}}></img></Link>
     <Link to='/'> <h4 id='logo-txt'>Shopify</h4></Link>
     </div>

    <div id='head-lnk'>
    <Link to="/signup" className="lnk" style={{borderLeft: '1px solid black',paddingLeft:'5px'}}><b>  &#128129;</b></Link>
  {/*  <Link to="/" className="lnk"><b>Home</b></Link> */}
    <Link to ="/product" className="lnk"><b>Products</b></Link>
    <Link to="/contact" className="lnk"><b>Contact</b></Link>

    
    </div>
    </div>
  );
}
export default Header;
