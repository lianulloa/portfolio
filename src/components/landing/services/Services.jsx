import React from "react"
import {
  Container,
  Hidden
} from "@material-ui/core"
import MainSkills from "../mainSkills/MainSkills"
import Tag from "../../tag/tag"
import tags from "../../../assets/tags.json"
import "./Services.scss"

function Services() {
  return <div className="App-section" id="App-services">
    <Container maxWidth="md">
      <h1>
        Main Skills
      </h1>
      <MainSkills />
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
