import React, { Component } from "react"
import {
  Container
} from "@material-ui/core"
import "./About.scss"
import PersonalProject from "../work/Personal"
import Book from "../work/Book/Book"
import WorkTimeline from "../work/Timeline/Timeline"
import JOBS from "./jobs.json"
import BOOKS from "./books.js"

class About extends Component {
  // componentDidMount() {
  //   window.onscroll = () => {
  //     this.setState();
  //   };
  // }

  render() {
    return (
      <div className="App-section" id="App-about">
        <Container maxWidth="md">
          <h1 style={{ textTransform: "uppercase"}}>
            Work Experience
          </h1>
          <div className="row">
            <div className="col-md-12">
              <WorkTimeline jobs={JOBS}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xs-12 secondary-experience">
              <h2 style={{ textTransform: "uppercase"}}>
                My Projects
              </h2>
              <small>(or Hobbies)</small>
              <div className="row">
                <div className="col-xs-12">
                  <PersonalProject
                    title="VuexModuleMaker"
                    description="A helper to reduce repetition inside Vuex modules"
                    link="https://www.npmjs.com/package/@lianulloa/vuex-module-maker"
                  />
                </div>
                <div className="col-xs-12">
                  <PersonalProject
                    title="Faster"
                    description="A (toy) service to infer network speed. Implements an unary gRPC service (Inspired by fast.com)"
                    link="https://github.com/lianulloa/faster"
                  />
                </div>
                <div className="col-xs-12">
                  <PersonalProject
                    title="Node Rest Server"
                    description="Basic project to learn Node.js"
                    link="https://github.com/lianulloa/node-rest-server-base"
                  />
                </div>
                <div className="col-xs-12">
                  <PersonalProject
                    title="Silic"
                    description="Gesture-based mobile music player. Integrates with cloud services like Google Drive and Dropbox"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 secondary-experience">
              <h2  style={{ textTransform: "uppercase"}}>
                Books
              </h2>
              <small>(I have read)</small>
              <div className="row" style={{columnCount: 2, display: "block"}}>
                {
                  BOOKS.map(book =>
                    <div key={book.title} style={{display: "inline-block"}}>
                      <Book {...book} />
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default About
