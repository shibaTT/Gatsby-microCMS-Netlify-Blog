import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, currentPage }) => (
  <header>
    <Link
      to="/"
      className={
        `c-header__link ` + (currentPage === "home" ? "is-current" : "")
      }
    >
      {siteTitle}
    </Link>
    {/* TODO: 現在ページの場所によってclass名に`is-current`を付与する */}
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
  </header>
)

export default Header
