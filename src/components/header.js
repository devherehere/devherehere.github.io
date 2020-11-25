import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./mystyles.scss"

const Header = ({ siteTitle }) => (
  <nav class="level" id="top-nav">
    <p class="level-item has-text-centered">
      <Link to={"/"} activeClass={"link is-info"}>
        Home
      </Link>
    </p>
    <p class="level-item has-text-centered">
      <Link to={"/blog"} activeClass={"link is-info"}>
        Blog
      </Link>
    </p>
    <p class="level-item has-text-centered">
      <div style={{ height: "30px", fontSize: "160%", fontWeight: "bold" }}>
        DEVHEREHERE
      </div>
    </p>
    <p class="level-item has-text-centered">
      <Link to={"/portfolio"} activeClass={"link is-info"}>
        Portfolio
      </Link>
    </p>
    <p class="level-item has-text-centered">
      <Link to={"/about-me"} activeClassName="link is-info">
        About Me
      </Link>
    </p>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
