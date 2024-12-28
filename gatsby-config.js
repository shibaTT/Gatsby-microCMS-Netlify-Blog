/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

// エラーが出たら `.env.local` じゃなくて `.env.development` に名前を変更して下さい
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || "development"}`,
})

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
                serviceId: process.env.SERVICE_DOMAIN,
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
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/images`,
                name: "images",
            },
        },
    ],
}
