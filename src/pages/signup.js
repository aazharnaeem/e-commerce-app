import React, { useState } from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'



const Signup = ()=>{

    let [users, setusers] = useState({
        username:"",
            email:"",
             Password: "",
    })

    const changeHandler=(e)=>{
        // console.log(e.target.value)
        const value =e.target.value;
        setusers({
        ...users,
        [e.target.name]: value
        })
    }

    // console.log(users.email+"         Email")
   
    const submit=()=>{
        alert("WELCOME::"+users.username+"    Thank you for choosing MyShop"+"   Enjoy Shopping with us")
        setusers({
            username:"",
            email:"",
            Password:""
        })
    }
    return(
        <Layout>
            <div className="signup-form">
            <div class="login-form">
               <h2>Sign In</h2>
               <p>Sign In to your account</p>
               <hr />

                <h3>User Name: *</h3>
                <input  type="text" placeholder="Enter User Name" name="username" required value={users.username} onChange={changeHandler}/>
               <h3>Email Address: *</h3><br />
               <input  type="email" placeholder="Enter Email" name="email" required value={users.email} onChange={changeHandler}/><br />
               <h3>Password: *</h3><br />
               <input  type="password" placeholder="Enter Password" name="Password" required value={users.Password}  onChange={changeHandler}/> <br />
               <br />
              <Link to="/contact"><p style={{color:"black",fontSize:"10px",textDecoration:"underline"}}>Need Help?</p></Link>
              <button className="login-form-button" onClick={submit}>Signup</button>
           </div>

            </div>
        </Layout>
    )

}

export default Signup;