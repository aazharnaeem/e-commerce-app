import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'

const signup = ()=>{
    return(
        <Layout>
            <div className="signup-form">
            <form class="login-form">
               <h2>Sign In</h2>
               <p>Sign In to your account</p>
               <hr />

               <label>Email Address: *</label><br />
               <input id="emailAddress" type="email" placeholder="Enter Email"/><br />
               <label>Password: *</label><br />
               <input id="password" type="password" placeholder="Enter Password"/> <br />
               <br />
               <a href="./contact.html"><p>Forgot your Password?</p></a>
               <a href="../index.html"><button >LOGIN</button></a>
           </form>

            </div>
        </Layout>
    )

}

export default signup;