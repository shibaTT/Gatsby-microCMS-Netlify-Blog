import * as React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"

const TableOfContents = blogInfo => (
  <div className="c-tableOfContents">
    <p className="c-tableOfContents__title">もくじ</p>
    <ul className="c-tableOfContents__items">
      {blogInfo.heading &&
        blogInfo.heading.map(({ headline }) => (
          <li className="c-tableOfContents__item">
            <AnchorLink
              href={`#${headline.id}`}
              className="c-tableOfContents__link"
            >
              {headline.text}
            </AnchorLink>
          </li>
        ))}
    </ul>
    どわああ
    <br />
    どわああ
    <br />
    どわああ
    <br />
    どわああ
    <br />
    どわああ
    <br />
    どわああ
    <br />
    どわああ
    <br />
  </div>
)

export default TableOfContents
