import React from 'react'
import Layout from '../components/layout'
import BlogSider from '../components/blogSide'
import {Link} from 'gatsby'
import first from '../images/blogimages/First.png'
import second from '../images/blogimages/second.png'
import third from '../images/blogimages/third.png'


const Blog=()=>{
    return(
        <Layout>
            <div className="blog-main">
                <div className="blog-content">
                <div className="blogs">
                <img src={first} alt="blog-img"></img>
                <Link to="/postTitle"><h3 style={{color:"#202020", textDecoration:"underline"}}>BLOG POST TITLE</h3></Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.<Link to="/postTitle"><b style={{color:'black'}}>...Read more</b></Link></p>
                </div>
                <div className="blogs">
                <img src={second} alt="blog-img"></img>
                <Link to="/videoPost" ><h3 style={{color:"#202020", textDecoration:"underline"}}>VIDEO POST</h3> </Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.<Link to="/videoPost"><b style={{color:'black'}}>...Read more</b></Link></p>
                </div>
                <div className="blogs">
                <img src={third} alt="blog-img"></img>
                <Link to="/blogResponsive"><h3 style={{color:"#202020",  textDecoration:"underline"}}>EVERY THING RESPONSIVE</h3></Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.<Link to="/blogResponsive"><b style={{color:'black'}}>...Read more</b></Link></p>
                <hr  style={{opacity:"0.1"}}/>
                </div>
                </div>
                <hr style={{opacity:"0.1"}}/>
            <div className="blog-main-sider">
            <BlogSider />
            </div>
            </div>
        </Layout>
    )
}

export default Blog