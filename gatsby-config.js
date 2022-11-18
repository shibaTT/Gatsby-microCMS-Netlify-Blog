/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "To The First",
    description:
      "初めてのJamstackのブログを作ってみたので、その過程や躓いたところとか、あとは普通に健忘録的なものとか、日常とか、なんかよくわかんないけど適当に置いておこうかなって感じですね",
    author: "@tori",
    siteUrl: "https://ecup.netlify.app",
  },
  plugins: [
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: "ecup",
        apis: [
          {
            endpoint: "blogs",
          },
          {
            endpoint: "categories",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
    },
  ],
}
