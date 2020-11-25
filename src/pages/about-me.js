import React from "react"
import DefaultTemplate from "../components/default-template"

const AboutMe = props => {
  return (
    <DefaultTemplate title={"About me"}>
      <section class="section">
        <div class="container ">
          <div class="title topic-title">About Me</div>
          <div class="subtitle">
            <div class="columns">
              <div class="column">
                <figure class="image " id="profile">
                  <img
                    class="is-rounded"
                    src="https://source.unsplash.com/user/erondu/256x256"
                  />
                </figure>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="content">ชอบทดลองและทดสอบอะไรใหม่ๆ</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultTemplate>
  )
}

export default AboutMe
