
import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'
import contact from '../images/contact-cover.jpeg'
const Contact = () =>{
    return(
        <Layout>
            <div className='cover'>
                <img src={contact}></img>
            <div className="cover-cont" id="contact">
            <h1>
                Contact Us
            </h1>
            <strong>Are you a customer who needs help? That's what the Team is for.</strong>
            <p>If you're wondring about an order, our products, or our website, shoot them an email at (<a style={{textDecoration:"underline"}} href="mailto: azharnaeem76@gmail.com" >azharnaeem76@gmail.com</a>) or check out the <Link to="/faqs" style={{textDecoration:"underline"}}>(Help & FAQs).</Link ></p>
            <h3>Thank you! </h3>
            </div>
            </div>
        </Layout>
    )
}
export default Contact;