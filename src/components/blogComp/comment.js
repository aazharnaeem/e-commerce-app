import React,{useState} from 'react'
import person from './person.png'
const Comment =()=>{
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
                <div className="blog-reply">
                            <hr  style={{opacity:"0.1"}}/>
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

    )
}

export default Comment