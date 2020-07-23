import React from "react"
import Layout from "../components/layout"
//import cover4 from "../images/cover.jpg";

const Home = () => {
  return(
    <Layout>
      <div id="home-top">
      {/* <img src={cover4} alt="img" style={{width:'100%', height:'450px'}}></img> */}
      <div id="home-top-first">
      <h3>Welcome Text</h3>
      <p>lorem ipsum dolor esat</p>
      <button>Sign up</button>
      </div>
      </div>
      <div id="home2">
        <h1>Home 2</h1>
        <h1>Home 2</h1>
      </div>
      <div id="home3">
        <h1>Home 3</h1>
        <h1>Home 3</h1>
      </div>
      <div id="home4">
        <h1>Home 4</h1>
        <h1>Home 4</h1>
      </div>

    </Layout>
)
}
export default Home