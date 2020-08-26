import React from 'react'
import Layout from '../components/layout'
import Cover from '../images/about-cover2.jpg'
const About =()=>{
    return(
        <Layout>
            <div className="cover">
                <img src={Cover}></img>
                <div className="cover-cont" id="abt">
                    <h2 style={{fontSize:"45px"},{textAlign:"center"}}>ABOUT US</h2>
                    <p>We are Shop. We are an empowering, bold and forward thinking online fashion brand, inspired by real life. We design and create product informed by you, our customers, our friends and global influences: Catwalk, celebrity, social media, bloggers and street style, creating an online fashion destination that encompasses and celebrates everything it means to be a girl in a digitally immersed world today.</p>
                </div>
            </div>
        </Layout>
    )
}
export default About