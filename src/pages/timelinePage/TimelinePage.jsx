import React, { useEffect } from "react"
import { Container } from "@material-ui/core"
import WorkTimeline from "../../components/work/Timeline/Timeline"
import {selectors, actions } from "../../store/slices/jobs"
import { useDispatch, useSelector } from "react-redux"

function TimelinePage() {
  const jobs = useSelector(selectors.jobs)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!jobs.length) {
      dispatch(actions.getJobs())
    }
  })
  return (
    <div className="App-section" id="App-algorithms">
      <Container maxWidth="md">
        <h1 className="m-b-xs">Timeline</h1>
        <div className="row">
          <div className="col-md-12">
            <WorkTimeline jobs={jobs}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TimelinePage