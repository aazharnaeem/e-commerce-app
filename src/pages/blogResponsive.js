import React, { useState } from 'react'
import Layout from '../components/layout'
import BlogSider from '../components/blogSide'
import third from '../images/blogimages/third.png'
import person from '../images/blogimages/person.png'
const RespPost=()=>{
    let [cmnt, Setcmnt]=useState({
        name: "",
        email: "",
        comment:"",
        nameList:[],
        commentList:[]
    })
    const changeHandle=(e)=>{
        const value= e.target.value
        
        Setcmnt({
            ...cmnt,
            [e.target.name]: value            
        })
    }
    
    const post =()=>{
        const cmntlist= cmnt.commentList
        const namelist= cmnt.nameList
        cmntlist.push(cmnt.comment)
        namelist.push(cmnt.name)
        // console.log(cmntlist);
        // console.log(namelist)
        
    }
    
    return(
        <Layout>
           <div className="blog-main">
               <div className="blog-content">
            <div className="blogs">
                <img src={third} alt="blog-img"></img>
                <h3 style={{color:"#202020", textDecoration:"underline"}}>BLOG POST TITLE</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu.</p>
                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>
                <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada.</p>
                <hr  style={{opacity:"0.1"}}/>
                <div className="blog-reply">
                    <h3>LEAVE A REPLY</h3>
                    <p>Your email address will not be published. Required fields are marked *</p>
                  
                  
                    <hr  style={{opacity:"0.1"}}/>
                  
                  
                    <div className="Comment-section">
                        {cmnt.nameList.map((nameList,index)=>(
                            <p key={index}><img src={person} style={{width:"50px", borderRadius:"50%"}} alt="person"></img> {nameList}</p>
                        ))}
                        {cmnt.commentList.map((commentList, index)=>(
                        <p key={index}>{commentList}</p>
                    ))}
                    </div>
                    <hr  style={{opacity:"0.1"}}/>
                  
                    <br/>
                    <h4>Comment</h4>
                    <textarea style={{width:"100%", height:"200px"}} name="comment" value={cmnt.comment}  placeholder="Comment..." onChange={changeHandle}></textarea>
                <table>
                    <thead>
                        <tr>
                            <td>Name *</td>
                            <td>Email *</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" size="30" name="name" value={cmnt.name}  placeholder="Name" onChange={changeHandle}/></td>
                            <td><input type="email" size="30" name="email" value={cmnt.email}  placeholder="Email" onChange={changeHandle}/></td>
                            <td><button onClick={post}>Post Comment</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                <hr  style={{opacity:"0.1"}}/>

                <div className="blog-main-sider">
                 <BlogSider />
                  </div>
                </div>

        </Layout>
    )
}

export default RespPost