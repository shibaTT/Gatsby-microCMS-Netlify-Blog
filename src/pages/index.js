import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home"></Seo>
    <ul>
      {data.allMicrocmsBlogs.edges.map(({ node }) => (
        <li key={node.blogId}>
          <Link to={`/blog/${node.blogsId}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsBlogs {
      edges {
        node {
          blogsId
          title
        }
      }
    }
  }
`
