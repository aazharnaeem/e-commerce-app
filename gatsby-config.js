// const dotenv = require('dotenv')

// if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'development'){
//   dotenv.config()
// }

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    name: "Azhar Naeem",
    age: 20,
  },
  
  plugins: [
    {  
    resolve: `gatsby-source-contentful`,

    options: {
      spaceId: `7mkv64b12xox`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
