import React from "react"
import {
  Container
} from "@material-ui/core"
import BookSlider from "../bookSlider/bookSlider"
import PersonalProject from "../../work/Personal"
import BOOKS from "./books.js"
import PERSONAL_PROJECTS from "./personal.json"
import "./About.scss"

function About() {
  return (
    <div className="App-section" id="App-about">
      <Container maxWidth="md">
        <div className="row">
          <div className="col-xs-12 side-experience">
            <h2 style={{ textTransform: "uppercase"}}>
              My Projects
            </h2>
            <small>(or Hobbies)</small>
            <div className="row">
              {
                PERSONAL_PROJECTS.map(p => 
                  <div className="col-md-6 col-xs-12" key={p.title}>
                    <PersonalProject
                      {...p}
                    />
                  </div>
                )
              }
            </div>
          </div>
          <div className="col-xs-12 side-experience m-b-lg">
            <h2  style={{ textTransform: "uppercase"}}>
              Books
            </h2>
            <small>(I have read)</small>
            <BookSlider books={BOOKS} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
