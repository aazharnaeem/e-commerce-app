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
import meas from '../images/category/measuring tools.png'
import tablets from '../images/category/tablets.png'
import games from '../images/category/games.png'
import bookshelf from '../images/category/bookshelf.png'
import mobiles from '../images/category/mobiles.png'
import giftcards from '../images/category/giftcards.png'
import sports from '../images/category/fitness.png'
import Tv from '../images/category/Tv.png'

const Home = () => {
  return(
    <Layout>
      <div id="home-top">
      <div id="home-top-first">
      <h3>Shopify</h3>
      <p>Everything you need to buy</p>
      <Link to="signup"><button className='sign-up'>Sign up</button></Link>
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
        <h3 >Category</h3>
        <div className="cate">
          <div className='cat-item'><Link to='/product'><img  alt="img" src={meas} width={150} title="Measuring instruments"></img></Link></div>
          <div className='cat-item'><Link to='/product'> <img alt="img"  src={tablets} width={150} title="Tablets"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={games} width={150} title="Games"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={bookshelf} width={150} title="Bookshelf"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={mobiles} width={150} title="Mobiles"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={giftcards} width={150} title="GiftCards"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={sports} width={150} title="Sports & Fitness"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={Tv}  width={150} title="Tv & appliances"></img></Link></div>
        </div>
        <div className="ind-main">
          <div className="ind1"><Link to="/product"><img src={img1} alt="img"></img></Link> </div>
          <div className="ind-right">
          <div className="ind2"> <Link to="/product"><img src={img2} alt="img"></img></Link></div>
          <div className="ind3"><Link to="/product"><img src={img3} alt="img"></img></Link></div>
          <div className="ind-both">
          <div className="ind4"> <Link to="/product"> <img src={img4} alt="img"></img></Link></div>
          <div className="ind5"> <Link to="/product"> <img src={img5} alt="img"></img></Link></div>
        </div>
        </div>
        </div>
        <div className="news-letter">
          <h3>NEWS LETTER</h3>
          <p>Get timely updates from your favourite product</p>
          <input type="email" placeholder="Enter your Email"  size="50"/>
          <button>Subscribe</button>
        </div>

    </Layout>
)
}
export default Home