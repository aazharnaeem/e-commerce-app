import React from "react"
import { graphql,Link} from "gatsby"
import Layout from '../components/layout'
const ComponentName = ({ data:{Products} }) => {
    //console.log(Products);

    return(
        <Layout>
            <section style={{display:'flex',justifyContent:'space-around'}}>
                
            {
            Products.nodes.map((product) => {
                return (
                    <article key={product.key}>
                        <h3>{product.title}</h3>
                        <img src={product.image.fluid.src} alt={product.title} width={200} height={200}></img>
                        <p>{product.price}</p>
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

