require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Maggie and Dustin`,
    description: `Landing page for the wedding of Dustin Schau and Maggie Alcorn`,
    author: `schaudustin`,
    siteUrl: process.env.DEPLOY_URL || 'https://maggieanddustin.com',
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `..`, `content`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        downloadLocal: true,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
      },
    },
  ],
}
