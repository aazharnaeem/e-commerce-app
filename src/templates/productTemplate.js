import React from 'react'
import Layout from "../components/layout";
const productTemplate = ({pageContext:{data}}) => {
    console.log(data);
    return (
        <Layout>
            <section id="product-template" >
                <h2>{data.title}</h2>
                <img src={data.image.fluid.src} alt={data.title} />
                <p><strong>Price:</strong>{data.price}</p>
                <p>{data.info.info}</p>
            </section>
        </Layout>
    )
}

export default productTemplate;