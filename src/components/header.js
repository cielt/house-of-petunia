import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="page-header" id="page-header">
    <div className="page-header-content max-w max-gl" id="page-header-content">
      <div className="pa-2">
        <Link className="home-logo-link" id="home-logo-link" to="/">
          {siteTitle}
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
