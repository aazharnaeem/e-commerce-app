import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import cover from '../images/404.jpg'

const PageNot = () =>{
  return(
    <Layout>
      <div className="cover">
      <img style={{width:"100%"}} src={cover} alt="Page Not Found"></img>
      <div className="cover-cont">
      <h1>404 Page Not Found</h1>

      <p>We Can't find the page you are looking for</p>
      <br />
      <Link to="/"><button className="cover-btn">Go Back</button></Link>
      </div>
      </div>
    </Layout>
  )
}

export default PageNot;