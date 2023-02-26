import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout currentPage="blog">
    <Seo title={data.microcmsBlogs.title} />
    <article className="c-post">
      <div
        className={`c-post__eyeCatch c-post__eyeCatch-${data.microcmsBlogs.category.id}`}
      >
        <p className="c-post__eyeCatchCategory">
          {data.microcmsBlogs.category.name}
        </p>
      </div>
      <div className="c-post__meta">
        <h1 className="c-post__title">{data.microcmsBlogs.title}</h1>
        {/* <div className="c-post__category">
          <Link to={`/category/${data.microcmsBlogs.category.id}`}>
            {data.microcmsBlogs.category.name}
          </Link>
        </div> */}
        <div className="c-post__dates">
          <p className="c-post__createdAt">{data.microcmsBlogs.createdAt}</p>
          {data.microcmsBlogs.createdAt === data.microcmsBlogs.updatedAt && (
            <p className="c-post__updatedAt">{data.microcmsBlogs.updatedAt}</p>
          )}
        </div>
      </div>
      <div
        className="c-post__contents"
        dangerouslySetInnerHTML={{
          __html: `${data.microcmsBlogs.content}`,
        }}
      />
    </article>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query ($id: String!) {
    microcmsBlogs(id: { eq: $id }) {
      blogsId
      title
      content
      updatedAt(formatString: "YYYY/MM/DD")
      createdAt(formatString: "YYYY/MM/DD")
      category {
        name
        id
      }
    }
  }
`
