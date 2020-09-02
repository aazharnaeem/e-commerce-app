import React from 'react'
import Layout from '../components/layout'
import contact from '../images/contact-cover.jpeg'
import Top from '../images/faqs-images/1.jpeg'
import Orders from '../images/faqs-images/2.jpeg'
import Shipping from '../images/faqs-images/3.jpeg'
import Return from '../images/faqs-images/5.jpeg'
import Warranty from '../images/faqs-images/6.jpeg'
import product from '../images/faqs-images/7.jpeg'

const faqs =()=>{
    return(
        <Layout>
            <div className="faqs-main">
                <div className="cover">
                <img src={contact} height='200px' width='100%'></img>
                <div className="cover-cont" style={{top:'20%'}}>
                    <h2>HELP</h2>
                    <input type="text" placeholder='search i.e "returns" or "prescription"' size='50'/>
                    <button className='cover-btn' style={{padding:'3px 10px 3px 10px'}}>search</button>

                </div>
                </div>
                <div className="faqs-content">
                    <img src={Top} alt='Top Maintainence' title='Top Maintainence' width='150px'></img>
                    <img src={Orders} alt='Orders' title='Orders' width='150px'></img>
                    <img src={Shipping} alt='Shipping' title='Shipping' width='150px'></img>
                    <img src={Return} alt='Return' title='Return & warranty' width='150px'></img>
                    <img src={Warranty} alt='Warranty' title='Warranty' width='150px'></img>
                    <img src={product} alt='product' title='product' width='150px'></img>

                </div>
            </div>
        </Layout>
    );
} 

export default faqs