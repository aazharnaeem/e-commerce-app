import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'

const signup = ()=>{
    return(
        <Layout>
        <div className='signup-form'>
        <form className='frm'>
            <h1>Sign up</h1><br></br>
            <label>Username:</label><br></br>
            <input type='text'></input><br></br>
            <label>Email</label><br></br>
            <input type='emial'></input><br></br>
            <label>Password</label><br></br>
            <input type='password'></input><br></br>
            <button className='signup-btn'>Submit</button><Link to='/login'><button className='signup-btn'>Login</button></Link>
            {/* <ul>
                <li>
                    <h1>Sign up</h1>
                </li>
                <li>
                    <label>Username</label>
                </li>
                <li><input type='text'></input></li>
                <li>
                    <label>Username</label>
                </li>
                <li><input type='text'></input></li>
                <li>
                    <label>Username</label>
                </li>
                <li><input type='text'></input></li>
            </ul> */}

        </form>
        </div>
        </Layout>
    )

}

export default signup;