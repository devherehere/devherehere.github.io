import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import "./mystyles.scss"

const Layout = ({ children }) => {
  const d = new Date()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer class="footer is-warning">
        <div class="content has-text-centered ">
          <p>
            © {d.getFullYear()}{" "}
            <Link to={"https://www.facebook.com/akawit.panutai"}>
              Akawit Panutai
            </Link>{" "}
            All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
