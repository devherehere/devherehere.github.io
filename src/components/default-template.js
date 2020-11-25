import React from "react"
import Layout from "../components/layout"

const DefaultTemplate = props => {
  return (
    <Layout>
      <section class="hero is-medium is-warning is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-uppercase has-text-centered">{props.title}</h1>
            <h2 class="subtitle"></h2>
          </div>
        </div>
      </section>
      {props.children}
    </Layout>
  )
}

export default DefaultTemplate
