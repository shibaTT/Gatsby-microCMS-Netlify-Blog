import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import moment from "moment"

const CategoryPage = ({ data }) => (
  <Layout currentPage={data.microcmsCategories.categoriesId}>
    <Seo title="Home"></Seo>
    <ul>
      {data.allMicrocmsBlogs.edges.map(({ node }) => (
        <li key={node.blogId}>
          <Link to={`/blog/${node.blogsId}`}>
            {node.title} - {moment(node.createdAt).format("YYYY年MM月DD日")}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default CategoryPage

export const query = graphql`
  query ($categoriesId: String!) {
    allMicrocmsBlogs(filter: { category: { id: { eq: $categoriesId } } }) {
      edges {
        node {
          title
          category {
            name
          }
          blogsId
          createdAt
        }
      }
    }
    microcmsCategories(categoriesId: { eq: $categoriesId }) {
      categoriesId
    }
  }
`
