import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "./header"
import "../styles/normalize.css"
import "../styles/typography.css"
import GlobalStyles from "../styles/GlobalStyles"
import { petuniasTheme } from "../styles/themeOfPetunia"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={petuniasTheme}>
      <GlobalStyles />
      <div className="page" id="page">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="page-content" id="page-content">
          {children}
        </main>
        <footer className="page-footer" id="page-footer">
          <div className="max-w max-gl">
            <div className="pa-2">
              &copy; {new Date().getFullYear()} {data.site.siteMetadata?.author}
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
