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
      accessToken: 'yi7DHr_MA5akpPm44HVjLSOatrZjUI45Ocu9q6rodBA',
      },
    },
  ],
}
