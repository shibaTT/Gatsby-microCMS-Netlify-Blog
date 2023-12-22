import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { load } from "cheerio"
import hljs from "highlight.js/lib/core"

const BlogPage = ({ data: { microcmsBlogs, site } }) => {
    const formattedContent = load(microcmsBlogs.content)
    formattedContent("pre code").each((_, element) => {
        const result = hljs.highlightAuto(formattedContent(element).text())
        formattedContent(element).html(result.value)
        formattedContent(element).addClass("hljs")
    })

    return (
        <Layout currentPage="blog" htmlString={microcmsBlogs.content}>
            <Seo title={microcmsBlogs.title} />
            <article className="c-post">
                <div
                    className={`c-post__eyeCatch c-post__eyeCatch-${microcmsBlogs.category.id}`}
                >
                    {(() => {
                        // console.log(microcmsBlogs)
                        if (microcmsBlogs.eyecatch === null) {
                            return (
                                <p className="c-post__eyeCatchCategory">
                                    {microcmsBlogs.category.name}
                                </p>
                            )
                        } else {
                            return (
                                <img
                                    srcSet={microcmsBlogs.eyecatch.url}
                                    alt={microcmsBlogs.title}
                                />
                            )
                        }
                    })()}
                </div>
                <div className="c-post__meta">
                    <ul className="c-post__tags">
                        {microcmsBlogs.tags &&
                            microcmsBlogs.tags.map(tag => (
                                <li className="c-post__tag">{tag.tags}</li>
                            ))}
                    </ul>
                    <h1 className="c-post__title">{microcmsBlogs.title}</h1>
                    {/* <div className="c-post__category">
                <Link to={`/category/${microcmsBlogs.category.id}`}>
                    {microcmsBlogs.category.name}
                </Link>
                </div> */}
                    <div className="c-post__dates">
                        <p className="c-post__createdAt">
                            {microcmsBlogs.createdAt}
                        </p>
                        {microcmsBlogs.createdAt !==
                            microcmsBlogs.updatedAt && (
                            <p className="c-post__updatedAt">
                                {microcmsBlogs.updatedAt}
                            </p>
                        )}
                    </div>
                </div>
                <div
                    className="c-post__contents"
                    dangerouslySetInnerHTML={{
                        __html: `${formattedContent.html()}`,
                    }}
                />
                <div className="c-post__share">
                    <p className="c-post__shareText">Share!</p>
                    <div className="c-post__sns">
                        <a
                            href={`https://twitter.com/intent/tweet?url=${site.siteMetadata.siteUrl}/blog/${microcmsBlogs.blogsId}&text=${microcmsBlogs.title}%20%7C%20To%20The%20First`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="c-post__snsItem is-twitter"
                            aria-label="Twitterシェアボタン"
                        >
                            <span className="c-post__snsItemText">
                                Twitterでシェア
                            </span>
                        </a>
                    </div>
                </div>
            </article>
        </Layout>
    )
}

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
            tags {
                tags
                id
            }
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`
