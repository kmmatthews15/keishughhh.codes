/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// const dotenv = require('dotenv');
// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config()
// }

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Keisha Matthews - Software Developer',
    author: 'Keisha Matthews',
    description: 'Keisha Matthews is a software developer based in Nashville, specializing in full-stack development. Keisha is a lover of all things tech and true crime.'
  },
  plugins: [
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve:'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    '@contentful/rich-text-react-renderer'
  ]
}
