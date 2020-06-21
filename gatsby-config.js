/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`
})
module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"gatsby try",
    description:"Random Random",
    author:"@Mihir",
    data:['item1','item2'],
    person:{name:'mihir',age:'20'},
  },
  plugins: [`gatsby-plugin-styled-components`,`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `ou267ytx6qbk`,
      // Learn about environment variables: https://gatsby.app/env-vars
      accessToken: process.env.ACCESS_TOKEN,
    },
  },
],
}
