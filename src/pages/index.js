import React from "react"
import Layout from "../components/layout"
import pro from '../images/pro15.png'
import shoe from '../images/shoe1.jpg'
import { Link } from 'gatsby'
import img1 from '../images/ind1.png'
import img2 from '../images/ind2.png'
import img3 from '../images/ind3.png'
import img4 from '../images/ind4.png'
import img5 from '../images/ind5.png'


const Home = () => {
  return(
    <Layout>
      <div id="home-top">
      <div id="home-top-first">
      <h3>Shopify</h3>
      <p>Everything you need to buy</p>
      <button className='sign-up'>Sign up</button>
      </div>
      </div>
      <div class="pun">
       <p><strong>It started with a simple idea: Create quality, well-designed products that I wanted myself.</strong></p>
   </div>
    <div id="home2">
        <div className='shirt-box'>
          <img src={pro} alt='img' height='250' width='100%'></img>
        </div>
        <div className='dis-offer'>
          <h1>Get 70% off</h1>
          <Link to='/product'><button className='dis-btn'>Explore Now</button></Link>
        </div>
        <div className='footwear'>
        <img src={shoe} alt='img' height='250' width='100%'></img>
        </div>
        </div>
        <div className="ind-main">
          <div className="ind1"><Link to="/product"><img src={img1}></img></Link> </div>
          <div className="ind-right">
          <div className="ind2"> <Link to="/product"><img src={img2}></img></Link></div>
          <div className="ind3"><Link to="/product"><img src={img3}></img></Link></div>
          <div className="ind-both">
          <div className="ind4"> <Link to="/product"> <img src={img4}></img></Link></div>
          <div className="ind5"> <Link to="/product"> <img src={img5}></img></Link></div>
        </div>
        </div>
        </div>
        <div className="news-letter">
          <h3>NEWS LETTER</h3>
          <p>Get timely updates from your favourite product</p>
          <input type="email" placeholder="Enter your Email"  size="50"/><button>Subscribe</button>
        </div>

    </Layout>
)
}
export default Home