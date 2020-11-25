import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostLink from "../components/post-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <section class="hero is-black is-bold is-large" id="first-section">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Devherehere!</h1>
            <h2 class="subtitle">จดบันทึก สรุปสิ่งที่สนใจของเรา</h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container ">
          <div class="title">บทความ</div>
          <div class="subtitle">
            <div class="columns">{Posts}</div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container ">
          <div class="title">ผลงาน</div>
          <div class="subtitle">
            <div class="columns">{Posts}</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
