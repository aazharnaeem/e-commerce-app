import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import cover from '../images/cover1.jpg'
import cover2 from '../images/home-cover2.png'
import Category from '../components/HomeComponent/category'
import {Collection} from '../components/HomeComponent/Collection'
import Gift from '../images/gift-icon.png'
import Globe from '../images/globe-icon.png'
import star from '../images/star-icon.png'  
const Home = () => {
  return(
    <Layout>
      {/*Cover-Section */}
      <div className="cover">
        <img src={cover} alt="Cover"></img>
        <div className="cover-cont">
        <h2>HUGE SALE UP TO 80% OFF</h2>
        <br/>
        <p>DIAL UP THE GLAMOUR IN AN ELEGANT COCKTAIL DRESS</p>
        <br/>
        <button> VIEW COLLECTIONS</button>
        </div>
      </div>

    <div className="info">
      <h2>WE ARE ELEGANT</h2>
      <p><em> Elegance isn't solely defined bywhat you wear. It's how you carry yourself.</em></p>
      <div className="info-sub">
      <div className="sub-inf">
        <img src={Gift} alt="Icons"></img>
        <h4>BEAUTIFUL PRODUCTS</h4>
        <p>I never look at other people's work. My mind has to be completely focused on my own illusions. It's a philosophy of life. A practice with no end</p>
      </div>
      <div className="sub-inf">
      <img src={Globe} alt="Icons"></img>

        <h4>FAST DELIVERY</h4>
        <p>If you do this, something will change, what will change is that you will change, your life will change, and if you can change you, you can perhaps change the world.</p>
      </div>
      <div className="sub-inf">
      <img src={star} alt="Icons"></img>
        <h4>100% SATISFACTION</h4>
        <p>I've always thought of the T-shirt as the Alpha and Omega of the fashion alphabet. I like the things around me to be beautiful and slightly dreamy.</p>
      </div>
      </div>
    </div>
    <hr style={{opacity:0.1}}/>
        <Collection/>
        <div  style={{textAlign:"center"}}>
        <Link to="/product"><button id="pro-btn" >
          SEE ALL PRODUCTS
        </button>
        </Link>
        </div>

        <div>
          <img src={cover2}></img>          
        </div>

        <Category/>
        
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