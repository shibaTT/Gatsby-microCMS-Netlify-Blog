/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 *
 * setHtmlAttributesのあとに, setHeadComponentsを追加する
 *
 * setHeadComponents([
    <link
      rel="preload"
      href="/fonts/mamelon.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="mamelon"
    />,
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "ja" })
}
