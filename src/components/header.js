import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./mystyles.scss"

const Header = ({ siteTitle }) => (
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">หน้าแรก</a>
        <a class="navbar-item">บทความ</a>
        <a class="navbar-item">ผลงาน</a>
        <a class="navbar-item">เกี่ยวกับ</a>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
