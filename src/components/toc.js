import * as React from "react"
import * as Cheerio from "cheerio"
import AnchorLink from "react-anchor-link-smooth-scroll"

const TableOfContents = ({ htmlString }) => {
    const $ = Cheerio.load(htmlString)
    const toc = $("h2, h3, h4")
        .toArray()
        .map(data => ({
            text: data.children[0].data,
            id: data.attribs.id,
            name: data.name,
        }))

    return (
        <div className="c-tableOfContents">
            <p className="c-tableOfContents__title">もくじ</p>
            <ul className="c-tableOfContents__items">
                {toc.length
                    ? toc.map(toc => (
                          <li
                              className={`c-tableOfContents__item is-${toc.name}`}
                          >
                              <AnchorLink
                                  href={`#${toc.id}`}
                                  className="c-tableOfContents__link"
                              >
                                  {toc.text}
                              </AnchorLink>
                          </li>
                      ))
                    : "もくじはありません…"}
            </ul>
        </div>
    )
}

export default TableOfContents
