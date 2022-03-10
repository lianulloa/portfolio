import React from "react"
import {
  Container,
  Hidden
} from "@material-ui/core"
import { A } from "hookrouter"
import Tag from "../../tag/tag"
import tags from "../../../assets/tags.json"
import "./Services.scss"
import ExperienceSlider from "../experienceSlider/ExperienceSlider"

function Services() {
  return <div className="App-section" id="App-services">
    <Container maxWidth="md">
      <h1 style={{marginBottom: 0}}>
        Work Experience
      </h1>
      <small >
        <A className="primary-color" href="timeline">(Go to Timeline 👉)</A>
      </small>
      <div className="row">
        <div className="col-xs-12">
          <ExperienceSlider />
        </div>
      </div>
      <Hidden mdUp>
        <div className="row" style={{ paddingBottom: 40, justifyContent: "center" }}>
          {/* TODO: deploy backend (node) to provide skills and work experience*/}
          {tags.map(({tag}) => <Tag key={tag} tag={tag} />)}
        </div>
      </Hidden>
    </Container>
  </div>
}

export default Services
