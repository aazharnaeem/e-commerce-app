import React from 'react'
import {Link} from 'gatsby'
import img1 from './category images/collections/ind1.png'
import img2 from './category images/collections/ind2.png'
import img3 from './category images/collections/ind3.png'
import img4 from './category images/collections/ind4.png'
import img5 from './category images/collections/ind5.png'

export const Collection=()=>{
    return(
        <div className="ind-main">
          <div className="ind1"><Link to="/product"><img className="coll-img" src={img1} alt="img"></img></Link> </div>
          <div className="ind-right">
          <div className="ind2"> <Link to="/product"><img className="coll-img" src={img2} alt="img"></img></Link></div>
          <div className="ind3"><Link to="/product"><img className="coll-img" src={img3} alt="img"></img></Link></div>
          <div className="ind-both">
          <div className="ind4"> <Link to="/product"> <img className="coll-img" src={img4} alt="img"></img></Link></div>
          <div className="ind5"> <Link to="/product"> <img className="coll-img" src={img5} alt="img"></img></Link></div>
        </div>
        </div>
        </div>
    )
}