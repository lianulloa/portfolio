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
import PERSONAL_PROJECTS from "./personal.json"

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
                {
                  PERSONAL_PROJECTS.map(p => 
                    <div className="col-xs-12" key={p.title}>
                      <PersonalProject
                        {...p}
                      />
                    </div>
                  )
                }
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
