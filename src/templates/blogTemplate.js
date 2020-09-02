import React from 'react'
import Layout from "../components/layout"
import BlogSider from '../components/blogSide'
import Comment from '../components/blogComp/comment'


const blogTemplate = ({pageContext:{data}})=>{
    // console.log(data)
    return(
        <Layout>
            <div className="blog-main">
                <div className="blog-content">
           
                <h1>{data.title}</h1>
                <img src={data.cover.fluid.src} alt={data.title}></img>
                <p>{data.content.content}</p>
              <hr  style={{opacity:"0.1"}}/>
              <Comment/>
              </div>             
            <hr  style={{opacity:"0.1"}}/>
                <div className="blog-main-sider">
                 <BlogSider />
                  </div>
            </div>
            
        </Layout>
    )
}

export default blogTemplate