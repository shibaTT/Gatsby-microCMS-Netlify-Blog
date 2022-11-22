import * as React from "react"
import { Link } from "gatsby"

import TableOfContents from "./toc"

const Header = ({ siteTitle, currentPage, blogInfo }) => (
  <header class="c-header l-header">
    <div class="c-header__contents">
      <div class="c-header__navigation">
        <div className="c-header__logo">{siteTitle}</div>
        <Link
          to="/"
          className={
            `c-header__link ` + (currentPage === "home" ? "is-current" : "")
          }
        >
          Home
        </Link>
        <Link
          to="/category/tech"
          className={
            `c-header__link ` + (currentPage === "tech" ? "is-current" : "")
          }
        >
          Tech
        </Link>
        <Link
          to="/category/design"
          className={
            `c-header__link ` + (currentPage === "design" ? "is-current" : "")
          }
        >
          Design
        </Link>
        <Link
          to="/category/daily"
          className={
            `c-header__link ` + (currentPage === "daily" ? "is-current" : "")
          }
        >
          Daily
        </Link>
      </div>

      {currentPage === "blog" && <TableOfContents blogInfo={blogInfo} />}
    </div>
  </header>
)

export default Header
