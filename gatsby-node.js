const path = require('path');
exports.createPages = async ({graphql,actions}) => {
     const {createPage} = actions; 
    const result = await graphql(`
     {
        allContentfulProduct {
            nodes {
              slug
              title
              price
              info{
                  info
              }
              image {
                fluid {
                  src
                }
              }
            }
          }
        }
     `)

     result.data.allContentfulProduct.nodes.forEach((data) => {
        createPage({
            path: `/products/${data.slug}`,
            component: path.resolve('./src/templates/productTemplate.js'),
            context: {
                data: data
            }
        })
     })
     console.log('ressssssssss--------',JSON.stringify(result));


     const bloggg = await graphql(`{
      allContentfulBlog {
        nodes {
          id
          cover {
            fluid {
              src
            }
          }
          title
          desc
          slug
          content {
            content
          }
        }
      }
     }
     `)

     bloggg.data.allContentfulBlog.nodes.forEach((data)=>{
       createPage({
         path:`/blogs/${data.slug}`,
         component: path.resolve('./src/templates/blogTemplate.js'),
         context:{
              data: data
         }
       })
     })

     console.log('ressssssssss--------',JSON.stringify(result));

}