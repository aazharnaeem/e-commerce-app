
import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'
const Contact = () =>{
    return(
        <Layout>
            <div className='contact-page'>
            <h1>
                Contact Us
            </h1>
            <strong>Are you a customer who needs help? That's what the Team is for.</strong>
            <p>If you're wondring about an order, our products, or our website, shoot them an email at <a href="mailto: azharnaeem76@gmail.com" >azharnaeem76@gmail.com</a> or check out the <Link to="/faqs">Help & FAQs.</Link ></p>
            <h3>Thank you! </h3>
            </div>
        </Layout>
    )
}
export default Contact;