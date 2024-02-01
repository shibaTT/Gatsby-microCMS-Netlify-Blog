import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import moment from "moment"

const IndexPage = ({ data }) => (
    <Layout currentPage="home">
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
                        <div className="c-main__listItemImage">
                            {node?.eyecatch !== null && (
                                <img
                                    srcSet={node.eyecatch.url}
                                    alt={node.title}
                                />
                            )}
                        </div>
                        <div className="c-main__listItemTitle">
                            {node.title}
                            <span className="c-main__listItemDate">
                                {moment(node.createdAt).format(
                                    "YYYY年MM月DD日"
                                )}
                            </span>
                        </div>
                    </Link>
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
        allMicrocmsBlogs(sort: { createdAt: DESC }) {
            edges {
                node {
                    blogsId
                    title
                    createdAt
                    category {
                        name
                    }
                    eyecatch {
                        url
                    }
                }
            }
        }
    }
`
