import React from 'react'
import {graphql, Link} from 'gatsby'
import BlogSider from '../components/blogSide'
import Layout from '../components/layout'



const Blog =({data:{Blogs}})=>{
    return(
        <Layout>
            <div className="blog-main">
                <div className="blog-content">
                    <section className="blog-content">
                        {
                            Blogs.nodes.map((blog)=>{
                                // console.log(blog)
                                return(
                                 <article key={blog.key}>
                                     <img src={blog.cover.fluid.src} alt={blog.title}></img>
                                     <h2>{blog.title}</h2>
                                     <p>{blog.desc}<Link to={`/blogs/${blog.slug}`} style={{color:"black"}}><b>...Read More</b></Link></p>

                                 </article>  
                                )
                            })
                        }

                    </section>
                </div>
                <hr style={{opacity:"0.1"}}/>
            <div className="blog-main-sider">
            <BlogSider />
            </div>

            </div>
        </Layout>
    )
}

export const query1 = graphql`{
    Blogs: allContentfulBlog {
        nodes {
          id
          cover {
            fluid {
              src
            }
          }
          title
          desc
          slug
        }
      }
}`

export default Blog