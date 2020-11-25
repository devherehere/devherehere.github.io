import React from "react"
import { Link } from "gatsby"
import "./mystyles.scss"

const PostLink = ({ post }) => (
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <p class="title is-4">
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
            </p>
            <p class="subtitle is-6">
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
            </p>
          </div>
          <div class="media-content"></div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">{post.frontmatter.date}</time>
        </div>
      </div>
    </div>
  </div>
)

export default PostLink
