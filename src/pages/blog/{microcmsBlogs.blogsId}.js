import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout currentPage="blog">
    <Seo title={data.microcmsBlogs.title} />
    <div class="c-post">
      <h1 class="c-post__title">{data.microcmsBlogs.title}</h1>
      <Link to={`/category/${data.microcmsBlogs.category.id}`}>
        <div class="c-post__category">{data.microcmsBlogs.category.name}</div>
      </Link>
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.microcmsBlogs.content}`,
        }}
      />
    </div>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query ($id: String!) {
    microcmsBlogs(id: { eq: $id }) {
      blogsId
      title
      content
      category {
        name
        id
      }
    }
  }
`
