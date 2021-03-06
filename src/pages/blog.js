import React from "react"
import DefaultTemplate from "../components/default-template"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"

const Blog = (
  {
    data: {
      allMarkdownRemark: { edges },
    },
  },
  props
) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <DefaultTemplate title={"Blogs"}>
      <section class="section">
        <div class="container">
          <div class="title topic-title">บทความ</div>
          <div class="subtitle">
            <div class="columns">{Posts}</div>
          </div>
        </div>
      </section>
    </DefaultTemplate>
  )
}

export default Blog

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
