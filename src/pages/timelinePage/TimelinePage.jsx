import React from "react"
import { Container } from "@material-ui/core"
import WorkTimeline from "../../components/work/Timeline/Timeline"
import JOBS from "../../components/landing/about/jobs.json"

function TimelinePage() {
  return (
    <div className="App-section" id="App-algorithms">
      <Container maxWidth="md">
        <h1 className="m-b-xs">Timeline</h1>
        <div className="row">
          <div className="col-md-12">
            <WorkTimeline jobs={JOBS}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TimelinePage