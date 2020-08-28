import React from 'react'
import {Link} from 'gatsby'
export const Nav =()=>{
    return(
        <div className="product-navbar">
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="shoe">Shoes</Link></li>
            <li><Link to="measuring">Measuring instrumeents</Link></li>
            <li><Link to="tablets">Tablets</Link></li>
            <li><Link to="games">Games</Link></li>
            <li><Link to="bookShelf">Bookshelf</Link></li>
            <li><Link to="mobiles">Mobiles</Link></li>
            <li><Link to="giftCard">Gift cards</Link></li>
            <li><Link to="fitness">Sports & Fitness</Link></li>
            <li><Link to="tv">Tv & appliances</Link></li>

          </div>
 
)
}