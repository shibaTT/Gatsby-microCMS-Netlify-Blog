import React, { useEffect, useState } from "react"
import queryString from "query-string"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import { load } from "cheerio"
import hljs from "highlight.js/lib/core"
import moment from "moment"

const BlogPage = ({ location }) => {
    const [articleData, setArticleData] = useState(null)
    const [formattedContent, setFormattedContent] = useState(null)

    useEffect(() => {
        const { contentId, draftKey } = queryString.parse(location.search)

        fetch(
            `https://ecup.microcms.io/api/v1/blogs/${contentId}?draftKey=${draftKey}`,
            {
                method: "GET",
                headers: {
                    "X-MICROCMS-API-KEY": process.env.GATSBY_API_KEY,
                },
            }
        )
            .then(async res => await res.json())
            .then(data => {
                setArticleData(data)

                // コードブロックのハイライト
                const content = load(data?.content)
                content("pre code").each((_, element) => {
                    const result = hljs.highlightAuto(content(element).text())
                    content(element).html(result.value)
                    content(element).addClass("hljs")
                })
                setFormattedContent(content.html())
            })
    }, [location])

    if (articleData === null) {
        return null
    }

    const formatDate = date => moment(date).format("YYYY/MM/DD")

    return (
        <Layout currentPage="blog" htmlString={articleData.content}>
            <Seo title={articleData.title} />
            <article className="c-post">
                {articleData.category && (
                    <div
                        className={`c-post__eyeCatch c-post__eyeCatch-${articleData.category.id}`}
                    >
                        {(() => {
                            // console.log(articleData)
                            if (articleData.eyecatch === undefined) {
                                return (
                                    <p className="c-post__eyeCatchCategory">
                                        {articleData.category.name}
                                    </p>
                                )
                            } else {
                                return (
                                    <img
                                        srcSet={articleData.eyecatch?.url}
                                        alt={articleData.title}
                                    />
                                )
                            }
                        })()}
                    </div>
                )}
                <div className="c-post__meta">
                    <ul className="c-post__tags">
                        {articleData.tags &&
                            articleData.tags.map(tag => (
                                <li className="c-post__tag">{tag.tags}</li>
                            ))}
                    </ul>
                    <h1 className="c-post__title">{articleData.title}</h1>
                    {/* <div className="c-post__category">
                <Link to={`/category/${articleData.category.id}`}>
                    {articleData.category.name}
                </Link>
                </div> */}
                    <div className="c-post__dates">
                        <p className="c-post__createdAt">
                            {formatDate(articleData.createdAt)}
                        </p>
                        {articleData.createdAt !== articleData.updatedAt && (
                            <p className="c-post__updatedAt">
                                {formatDate(articleData.updatedAt)}
                            </p>
                        )}
                    </div>
                </div>
                <div
                    className="c-post__contents"
                    dangerouslySetInnerHTML={{
                        __html: `${formattedContent}`,
                    }}
                />
                {/* // シェアブロックはプレビューなのでいりません
                <div className="c-post__share">
                    <p className="c-post__shareText">Share!</p>
                    <div className="c-post__sns">
                        <a
                            href={`https://twitter.com/intent/tweet?url=${site.siteMetadata.siteUrl}/blog/${articleData.blogsId}&text=${articleData.title}%20%7C%20To%20The%20First`}
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
                </div> */}
            </article>
        </Layout>
    )
}

export default BlogPage
