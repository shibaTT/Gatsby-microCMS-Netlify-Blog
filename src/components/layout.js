/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

/*
 *
 * 画像の読み込み方
 *
 * See: https://reffect.co.jp/react/gatsby-image-understand-for-beginner#Gatsby-image
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Head from "./head"
import Header from "./header"
import "@fontsource/m-plus-1/400.css"
import "@fontsource/m-plus-1/800.css"
//import "./layout.css"

const Layout = ({ children, currentPage = "" }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Head />
      <div className="c-mother l-mother">
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          currentPage={currentPage}
        />
        <main
          className={`c-main l-main ${currentPage === "blog" ? "is-blog" : ""}`}
        >
          {children}
        </main>
      </div>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
          textAlign: `center`,
        }}
        className="l-footer c-footer"
      >
        © {new Date().getFullYear()} - Built with Love.
      </footer>
    </>
  )
}

export default Layout
