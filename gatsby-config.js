const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production'){
  dotenv.config()
}

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
