import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import moment from "moment"

const CategoryPage = ({ data }) => (
  <Layout currentPage={data.microcmsCategories.categoriesId}>
    <Seo title="Home"></Seo>
    <ul className="c-main__list">
      {data.allMicrocmsBlogs.edges.map(({ node }) => (
        <li key={node.blogsId} className="c-main__listItem">
          <Link
            to={`/blog/${node.blogsId}`}
            className="c-main__listItemWrapper"
          >
            <div
              className={`c-main__listItemCategory is-${node.category.name}`}
            >
              {node.category.name}
            </div>
            <div className="c-main__listItemImage"></div>
            <div className="c-main__listItemTitle">
              {node.title}
              <span class="c-main__listItemDate">
                {moment(node.createdAt).format("YYYY年MM月DD日")}
              </span>
            </div>
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
