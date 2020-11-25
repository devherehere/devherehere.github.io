import React from "react"
import DefaultTemplate from "../components/default-template"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <DefaultTemplate title={frontmatter.title}>
      <section class="section">
        <div className="blog-post-container container">
          <div className="blog-post">
            <div class="title topic-title">{frontmatter.title}</div>
            <div class="subtitle topic-sub-title">{frontmatter.date}</div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <div class="buttons">
              <button class="button is-warning" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </DefaultTemplate>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
