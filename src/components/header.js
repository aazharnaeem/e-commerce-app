import React,{useContext} from "react"
import {Link} from 'gatsby'
import CounterContext from '../context/counterContext'



const Header = () => {
  
  let items = useContext(CounterContext);
  // console.log(item_count+"head")
  
  return(
    <div id='head-main'>
      <div className="head-logo">
        <Link to="/"><h3>Shopify</h3> </Link>
      </div>
      <div className="head-lnk">
      <Link to="/" className="lnk"><b>Home</b></Link>
      <Link to="/aboutus" className="lnk"><b>About</b></Link>
      <Link to="/contact" className="lnk"><b>Contact</b></Link>
      <Link to="/blog" className="lnk"><b>Blog</b></Link>
      <Link to ="/product" className="lnk"><b>Shop</b></Link>
      <Link to ="/signup" className="lnk"><b>SignIn</b></Link>

      <span className="cart-head" role="img" >
  <strong style={{color: "#efefef"}}>  &#128722;CART[<output>{items.count}</output>]</strong>
  </span>


      </div>
    </div>
  );
}
export default Header;

