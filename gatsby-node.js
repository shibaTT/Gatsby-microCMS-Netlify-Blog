/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
//     const { createPage } = actions
//     const result = await graphql(`
//         {
//             allMicrocmsBlogs {
//                 edges {
//                     node {
//                         id
//                         title
//                         content
//                         eyecatch {
//                             url
//                         }
//                         publishedAt
//                         categories {
//                             name
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     if (result.errors) {
//         throw result.errors
//     }

//     result.data.allMicrocmsBlog.edges.forEach(({ node }) => {
//         createPage({
//             path: `/blog/${node.slug}`,
//             context: {
//                 id: node.id,
//             },
//         })
//     })
// }

/**
 * Scheme Definition
 */
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
    type MicrocmsBlogs implements Node {
      eyecatch: URL
    }
    type URL {
      url: String
    }
  `

    createTypes(typeDefs)
}

/**
 * エイリアスの設定
 */
const resolve = require("path").resolve
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
            },
        },
    })
}
