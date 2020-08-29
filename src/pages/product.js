import React,{useState} from "react"
import {graphql,Link} from "gatsby"
import Layout from '../components/layout'
import {Nav} from '../components/productNav'
import CounterContext from "../context/counterContext"
import Cart from '../pages/cart'
const Product = ({ data:{Products} }) => {
  let [item , setItem] = useState({
    count: 0,
    price: 0,
    subTotalPrice: 0,
    EcoTax: 0,
    Vat: 0,
    totalprice: 0
  });

      // console.log(Products.nodes+"Product Nodes")
    return( 
      <CounterContext.Provider value={item}>

        <Layout>
          <Nav />

          <div className="product">
            <div className="product-left">
              
            <section id="product-section">             
            {
            Products.nodes.map((product) => {
              // const pro = {
              //   price: product.price
              // }

              const addItems=()=>{
                setItem({
                  count: ++item.count,
                  price: product.price,
                  subTotalPrice:Math.floor(item.price*item.count),
                  EcoTax: Math.floor(item.subTotalPrice*0.02),
                  Vat: Math.floor((item.subTotalPrice)/(1+.02)*-1 +(item.subTotalPrice)),
                  totalprice: Math.floor((item.subTotalPrice) + (item.EcoTax) + (item.Vat))
                })
              }
              // const removeItems=()=>{
              //   setItem({
              //     count: --item.count,
              //     subTotalPrice: item.price * item.count,
              //     EcoTax: Math.floor(item.subTotalPrice*0.02)-Math.floor(item.subTotalPrice*0.02),


              //   })
              // }
            
              return (
                    <article key={product.id} id="product-box" >
                        
                        <img src={product.image.fluid.src} alt={product.title} width={200} height={200}></img>
                        <h3>{product.title}</h3>
                        <p><strong>Price: $</strong>{product.price}</p>
                        <Link to={`/products/${product.slug}`} style={{color:"black"}}>More Info</Link>
                        <br/>
                        <button onClick={addItems} className="cart-add">Add To Cart</button>
                        {/* <button onClick={removeItems}>remove</button> */}
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
