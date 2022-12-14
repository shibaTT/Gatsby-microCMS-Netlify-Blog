import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout currentPage="blog">
    <Seo title={data.microcmsBlogs.title} />
    <div className="c-post">
      <h1 className="c-post__title">{data.microcmsBlogs.title}</h1>
      <div className="c-post__category">
        <Link to={`/category/${data.microcmsBlogs.category.id}`}>
          {data.microcmsBlogs.category.name}
        </Link>
      </div>
      <div
        className="c-post__contents"
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
