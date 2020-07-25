
import React from 'react'
import Layout from '../components/layout'
const Contact = () =>{
    return(
        <Layout>
            <div className='contact-page' style={{ textAlign:"center" , backgroundColor:"#86f4c1" , border:'1px solid'}}>
            <h1>
                Contact Us
            </h1>
            <strong>Are you a customer who needs help? That's what the Team is for.</strong>
            <p>If you're wondring about an order, our products, or our website, shoot them an email at <a href="mailto: azharnaeem76@gmail.com" >azharnaeem76@gmail.com</a> 
            or check out the <a href='/faqs'>Help & FAQs.</a></p>
            <h3>Thank you! </h3>
            </div>
        </Layout>
    )
}
export default Contact;