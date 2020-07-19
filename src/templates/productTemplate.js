import React from 'react'
import Layout from "../components/layout";
const productTemplate = ({pageContext:{data}}) => {
    console.log(data);
    return (
        <Layout>
            <section style={{display:'flex',justifyContent:'center', flexFlow:'column wrap',alignItems:'center'}}>
                <h2>{data.title}</h2>
                <img src={data.image.fluid.src} alt={data.title} />
                <p>{data.price}</p>
                <p>{data.info.info}</p>
            </section>
        </Layout>
    )
}

export default productTemplate;