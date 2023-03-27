import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => (
    <Layout currentPage="blog" htmlString={data.microcmsBlogs.content}>
        <Seo title={data.microcmsBlogs.title} />
        <article className="c-post">
            <div
                className={`c-post__eyeCatch c-post__eyeCatch-${data.microcmsBlogs.category.id}`}
            >
                <p className="c-post__eyeCatchCategory">
                    {(() => {
                        if (data.microcmsBlogs.eyecatch === null) {
                            return data.microcmsBlogs.category.name
                        } else {
                            return (
                                <img
                                    srcSet={data.microcmsBlogs.eyecatch.url}
                                    alt={data.microcmsBlogs.title}
                                />
                            )
                        }
                    })()}
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
                    <p className="c-post__createdAt">
                        {data.microcmsBlogs.createdAt}
                    </p>
                    {data.microcmsBlogs.createdAt !==
                        data.microcmsBlogs.updatedAt && (
                        <p className="c-post__updatedAt">
                            {data.microcmsBlogs.updatedAt}
                        </p>
                    )}
                </div>
            </div>
            <div
                className="c-post__contents"
                dangerouslySetInnerHTML={{
                    __html: `${data.microcmsBlogs.content}`,
                }}
            />
            <div className="c-post__share">
                <p className="c-post__shareText">Share!</p>
                <div className="c-post__sns">
                    <a
                        href={`https://twitter.com/intent/tweet?url=${data.site.siteMetadata.siteUrl}/blog/${data.microcmsBlogs.blogsId}&text=${data.microcmsBlogs.title}%20%7C%20To%20The%20First`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="c-post__snsItem is-twitter"
                        aria-label="Twitterシェアボタン"
                    >
                        <span class="c-post__snsItemText">Twitterでシェア</span>
                    </a>
                </div>
            </div>
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
            eyecatch {
                url
            }
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`
