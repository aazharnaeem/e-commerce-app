import React from "react"
import { graphql,Link} from "gatsby"
import Layout from '../components/layout'
const ComponentName = ({ data:{Products} }) => {
    //console.log(Products);

    return(
        <Layout>
            <section id="product-section">
                
            {
            Products.nodes.map((product) => {
                return (
                    <article key={product.key} id="product-box" >
                        <h3>{product.title}</h3>
                        <img src={product.image.fluid.src} alt={product.title} width={200} height={200}></img>
                        <p><strong>Price: </strong>{product.price}</p>
                        <Link to={`/products/${product.slug}`}>More Info</Link>
                    </article>
                )
        })
            }
                    
            </section>

        </Layout>
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

export default ComponentName

