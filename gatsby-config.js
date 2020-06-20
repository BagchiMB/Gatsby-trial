/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
],
}
