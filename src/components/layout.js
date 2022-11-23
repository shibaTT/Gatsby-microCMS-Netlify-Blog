/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
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
      <div class="c-mother l-mother">
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
      <script
        type="text/javascript"
        src="//typesquare.com/3/tsst/script/ja/typesquare.js?rCoKPc7o4Sk%3D"
        charset="utf-8"
      ></script>
    </>
  )
}

export default Layout
