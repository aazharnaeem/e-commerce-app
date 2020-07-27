import React from "react"
import Layout from "../components/layout"
//import cover4 from "../images/cover.jpg";
import shirt from '../images/shirt1.jpg'
import shoe from '../images/shoe1.jpg'
import { Link } from 'gatsby'


const Home = () => {
  return(
    <Layout>
      <div id="home-top">
      {/* <img src={cover4} alt="img" style={{width:'100%', height:'450px'}}></img> */}
      <div id="home-top-first">
      <h3>Shopify</h3>
      <p>Everything you need to buy</p>
      <button className=''>Sign up</button>
      </div>
      </div>
{/*       <h2 style={{textAlign:'center'}}>Welcome to shpify</h2> */}
      <div id="home2">
        <div className='shirt-box'>
          <img src={shirt} alt='img' height='250'></img>
        </div>
        <div className='dis-offer'>
          <h1>Get 70% off</h1>
          <Link to='/product'><button className='dis-btn'>Explore Now</button></Link>

        </div>
        <div className='footwear'>
        <img src={shoe} alt='img' height='250'></img>

        </div>
        </div>

    </Layout>
)
}
export default Home