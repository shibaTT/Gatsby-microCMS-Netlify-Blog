import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/" className="c-header__link">
      {siteTitle}
    </Link>
    <Link to="/category/tech" className="c-header__link">
      Tech
    </Link>
    <Link to="/category/design" className="c-header__link">
      Design
    </Link>
    <Link to="/category/daily" className="c-header__link">
      Daily
    </Link>
  </header>
)

export default Header
