import React from 'react';
import {Link} from 'gatsby'
const Footer = () =>{
    return(
        <footer>
            <div className="fot">
           <Link to="/"><h3>About Shoify</h3></Link>
           <p>Even the all-powerful Pointing has no 
               control about the blind texts it is an almost
                unorthographic life</p>

       </div>
       <hr/>
       <div className="fot">
           <ul>
            <Link to="/"> <h3> CUSTOMER CARE</h3></Link>
               <li>CONTACT</li>
               <li>RETURNS/EXCHANGE</li>
               <li>GIFT VOUCHER</li>
               <li>WISH LIST</li>
               <li>SPECIAL</li>
               <li>CUSTOMER SERVICES</li>
               <li>SITE MAPS</li>
           </ul>
       </div>
       <hr/>
       <div className="fot">
        <ul>
            <Link to="/about"> <h3> INFORMATION</h3></Link>
            <li>ABOUT US</li>
            <li>DELIVERY INFORMATION</li>
            <li>PRIVACY POLICY</li>
            <li>SUPPORT</li>
            <li>ORDER TRACKING</li>
        </ul>
    </div>
    <hr/>
    <div className="fot">
           <ul>
            <Link to="/"> <h3> NEWS</h3></Link>
               <li>BLOG</li>
               <li>PRESS</li>
               <li>EXIBITIONS</li>
           </ul>
    </div>
    <hr/>
    <div className="fot">
        <ul>
            <Link to="/contact"><h3>CONTACT INFORMATION</h3></Link>

            <li>xyz street Karachi</li>
            <li>+1234568766</li>
            <li>azharnaeem76@gmail.com</li>
        </ul>
    </div>
        </footer>

    );
}
export default Footer;