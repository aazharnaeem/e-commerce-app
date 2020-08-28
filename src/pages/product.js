import React,{useState} from "react"
import {graphql,Link} from "gatsby"
import Layout from '../components/layout'
import {Nav} from '../components/productNav'
import CounterContext from "../context/counterContext"
import Cart from '../pages/cart'
const Product = ({ data:{Products} }) => {
  let [item , setItem] = useState({
    count: 0,
  });

  const addItems=()=>{
    setItem({
      count: item.count+1
    })
  }
    return( 
      <CounterContext.Provider value={item}>

        <Layout>
          <Nav />

          <div className="product">
            <div className="product-left">
              
            <section id="product-section">             
            {
            Products.nodes.map((product) => {
                return (
                    <article key={product.id} id="product-box" >
                        
                        <img src={product.image.fluid.src} alt={product.title} width={200} height={200}></img>
                        <h3>{product.title}</h3>
                        <p><strong>Price: </strong>{product.price}</p>
                        <Link to={`/products/${product.slug}`} style={{color:"black"}} >More Info</Link>
                        {/* <button onClick={()=> {countState[1](++countState[0])}}>BUY</button> */}
                        <button onClick={addItems}>Add</button>
                    </article>
                )
        })
            }          
            </section>
            </div>
            <Cart/>
            
            </div>
        </Layout>
            </CounterContext.Provider>
    )
}

export const query = graphql`
  {
   Products: allContentfulProduct {
      nodes {
        id
        title
        image {
          fluid {
            src
          }
        }
        price
        slug
      }
    }
  }
`

export default Product
